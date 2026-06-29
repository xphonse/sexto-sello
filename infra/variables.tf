variable "aws_region" {
  description = "Region for the default provider. The ACM cert is always us-east-1 regardless (see versions.tf)."
  type        = string
  default     = "us-east-1"
}

variable "domain" {
  description = "Apex domain — the canonical host served by the distribution."
  type        = string
  default     = "sextosello.com"
}

variable "bucket_name" {
  description = "Name of the private S3 bucket that holds the exported site (out/). Globally unique."
  type        = string
  default     = "sextosello-site"
}

variable "github_repo" {
  description = "GitHub repo allowed to assume the deploy role, in owner/name form."
  type        = string
  default     = "xphonse/sexto-sello"
}

variable "github_branch" {
  description = "Branch whose pushes may assume the deploy role via OIDC."
  type        = string
  default     = "main"
}

variable "price_class" {
  description = "CloudFront price class. PriceClass_All covers all edge POPs (incl. South America) for the lowest worldwide latency; drop to PriceClass_100 to cut cost."
  type        = string
  default     = "PriceClass_All"
}
