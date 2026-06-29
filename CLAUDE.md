# CLAUDE.md

Content app for Spanish-speaking users of the Sexto Sello movement. Choirs and prayers from a physical book are digitized here and served through two frontends that share `libs/data`.

- Website: https://sextosello.com/
- Android App: https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros

## Critical build step

`libs/data` must be compiled before running either app. Run this after any change to `libs/data/choirs.ts` or `libs/data/prayers.ts`:

```bash
nx build data
```

Import errors at runtime almost always mean this step was skipped.

## Deployment

### Website

The site is a static export hosted on **S3 + CloudFront** — a private bucket
(origin access control) behind a CloudFront distribution, with Route 53 DNS and
an ACM cert. All infrastructure lives in `infra/` (Terraform). `nx start` is
never used in production.

Pushing to `main` is the deploy: `.github/workflows/deploy.yml` builds `out/`,
two-pass-syncs it to S3 over GitHub OIDC (no stored AWS keys), and invalidates
CloudFront. To ship a change, commit and push to `main` — there is no other
deploy path.

If CI is unavailable, you can run the same steps locally with your own AWS
credentials (build, then `aws s3 sync` the two passes, then `aws cloudfront
create-invalidation`); see `.github/workflows/deploy.yml` for the exact commands.

All image `src` values are prefixed with `/images/` by the custom loader in `packages/nestjs/imgLoader.js`. Static images must live in `packages/nestjs/public/images/`.

### Mobile (Android + iOS)

Uses EAS Build. Both platforms are supported. After building, upload manually to Play Store / App Store Connect.

```bash
cd packages/react-native
eas build --platform android --profile production
eas build --platform ios --profile production
```

EAS profiles (`eas.json`): `development` (internal), `preview` (internal), `production`.

## Adding or editing content

Edit `libs/data/choirs.ts` or `libs/data/prayers.ts` directly, then run `nx build data`.

**Choir line breaks** — use `/n` (literal slash-n, not backslash-n) inside paragraph strings. The website splits on `/n` and inserts `<br />`. Choir text is all-caps by convention, matching the physical book.

```ts
'FIRST LINE /nSECOND LINE /nTHIRD LINE'
```

**Prayer paragraph structure** — `paragraphs` is a 2D array. Each inner array is a visual group of lines rendered together:

```ts
paragraphs: [
  ['A single-line paragraph.'],
  ['Line one of a group.', 'Line two.', 'Line three.'],
]
```

**Slugs** — routes are generated as `/{page}-{normalized-title}`. The `page` field is the page number from the physical book. It prefixes the slug and must be unique within the collection.

## Known quirks

- `uiSlice` in `store/slices/ui.ts` has `name: 'asdf'` — harmless leftover, only affects Redux DevTools labels.
- Font size is clamped 12–36 in `store/slices/thunks.ts`. Initial value (12) is in `packages/react-native/data/constants.ts`.
- User preferences are persisted to AsyncStorage under the keys `'fontSize'` and `'themeMode'`. Renaming these keys silently resets preferences for existing users.
- `packages/nestjs` is a Next.js app, not the NestJS framework. The naming is a mistake that predates this codebase.
- No test suite exists. The data library's test script exits with an error by design (placeholder).
