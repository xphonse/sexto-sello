locals {
  www_domain = "www.${var.domain}"
  origin_id  = "s3-${var.bucket_name}"
}
