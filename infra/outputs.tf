output "acm_validation_records" {
  description = "Cutover step 4: add this CNAME at Namecheap to validate the cert before the NS switch."
  value = [
    for dvo in aws_acm_certificate.main.domain_validation_options : {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  ]
}

output "route53_name_servers" {
  description = "Cutover step 8: paste these 4 into Namecheap 'Custom DNS'."
  value       = aws_route53_zone.main.name_servers
}

output "cloudfront_distribution_id" {
  description = "For CI invalidations (vars.CF_DISTRIBUTION_ID) and smoke tests."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Distribution domain for pre-cutover smoke tests, e.g. https://<this>/."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "s3_bucket_name" {
  description = "Content bucket name (vars.AWS_S3_BUCKET)."
  value       = aws_s3_bucket.site.id
}

output "github_deploy_role_arn" {
  description = "Deploy role ARN (vars.AWS_ROLE_ARN)."
  value       = aws_iam_role.github_deploy.arn
}
