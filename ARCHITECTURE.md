# AWS Infrastructure Architecture

Static-site hosting for `sextosello.com` on AWS, managed with Terraform. State is stored locally (`infra/terraform.tfstate`, gitignored).

## Overview

```
Browser
  │
  ├─ sextosello.com  ──┐
  └─ www.sextosello.com ─┘
         │
     Route 53 (alias A/AAAA)
         │
     CloudFront Distribution
     ├─ TLS: ACM cert (us-east-1)
     ├─ CloudFront Function (viewer-request)
     │    ├─ 301 www → apex
     │    └─ pretty URL → .html rewrite
     ├─ Cache behaviors
     │    ├─ /_next/static/*  — immutable, cache forever
     │    ├─ /images/*        — immutable, cache forever
     │    └─ default          — CachingOptimized policy
     │
     S3 Bucket (private, OAC-only)
     └─ sextosello-site  (static export from nx build nestjs)
```

## Services

### Route 53
- Hosted zone for `sextosello.com`
- Apex (`sextosello.com`) and `www` both resolve to CloudFront via A + AAAA alias records (dual-stack)
- TXT record carries the Google site-verification token; email records intentionally omitted (no email use)

### CloudFront
- **Price class:** `PriceClass_All` — all edge POPs including South America (target audience)
- **Aliases:** `sextosello.com` and `www.sextosello.com`
- **Default root object:** `index.html`
- **IPv6 enabled**
- **Viewer protocol:** HTTP redirected to HTTPS
- **Compression:** enabled on all behaviors

**Cache behaviors (ordered):**

| Path | Policy | Notes |
|------|--------|-------|
| `/_next/static/*` | CachingOptimized | Content-hashed assets, immutable |
| `/images/*` | CachingOptimized | Static images, immutable |
| `*` (default) | CachingOptimized | HTML pages |

**Error handling:**
- S3 OAC returns 403 for missing keys; both 403 and 404 map to `/404.html` with a real 404 status and a 10 s cache TTL.

**CloudFront Function (`sextosello-rewrite`, runtime `cloudfront-js-2.0`):**
1. If host is `www.sextosello.com` → 301 to `https://sextosello.com{uri}`
2. Trailing slash → append `index.html`
3. No file extension → append `.html` (maps pretty routes to the Next.js static export flat files)

### S3
- Bucket: `sextosello-site` (private, all public access blocked)
- Access granted exclusively to the CloudFront distribution via **Origin Access Control (OAC)**, SigV4-signed. The bucket policy's `AWS:SourceArn` condition prevents any other distribution from reading the bucket.
- Contents: the static export produced by `nx build nestjs` (`packages/nestjs/out/`)

### ACM
- Certificate covers `sextosello.com` + `www.sextosello.com`
- **Must live in `us-east-1`** (CloudFront requirement); a dedicated aliased provider pins this
- Validation method: DNS (CNAME records in the Route 53 zone handle initial issuance and auto-renewal)

### IAM — GitHub OIDC Deploy Role
Keyless CI/CD: GitHub Actions assumes `sextosello-github-deploy` via OIDC — no stored AWS credentials.

- **OIDC provider:** `token.actions.githubusercontent.com`
- **Trust scope:** only `xphonse/sexto-sello`, branch `main`
- **Permissions (least privilege):**
  - `s3:ListBucket` on the content bucket
  - `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject` on bucket objects
  - `cloudfront:CreateInvalidation` on this distribution only

## Terraform

| Variable | Default | Description |
|----------|---------|-------------|
| `aws_region` | `us-east-1` | Default provider region |
| `domain` | `sextosello.com` | Apex domain |
| `bucket_name` | `sextosello-site` | S3 bucket (globally unique) |
| `github_repo` | `xphonse/sexto-sello` | Repo allowed to assume deploy role |
| `github_branch` | `main` | Branch allowed to assume deploy role |
| `price_class` | `PriceClass_All` | CloudFront edge coverage |

**Key outputs used by CI:**

| Output | CI variable |
|--------|------------|
| `cloudfront_distribution_id` | `CF_DISTRIBUTION_ID` |
| `s3_bucket_name` | `AWS_S3_BUCKET` |
| `github_deploy_role_arn` | `AWS_ROLE_ARN` |

## Deploy flow

1. Push to `main` triggers GitHub Actions
2. Workflow assumes `sextosello-github-deploy` via OIDC (no stored keys)
3. `nx build nestjs` produces `packages/nestjs/out/`
4. Files synced to `s3://sextosello-site`
5. CloudFront invalidation clears stale cached HTML
