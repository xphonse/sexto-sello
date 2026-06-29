# Certificate for the apex + www. MUST be in us-east-1 for CloudFront.
resource "aws_acm_certificate" "main" {
  provider                  = aws.us_east_1
  domain_name               = var.domain
  subject_alternative_names = [local.www_domain]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# DNS validation records, created in the Route 53 zone. During cutover these are
# NOT yet authoritative (Namecheap still serves DNS), so step 4 of the plan adds
# the same CNAME at Namecheap to get the cert issued. Once nameservers move to
# Route 53, these records cover ACM auto-renewal.
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.main.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 60
  allow_overwrite = true
}

# Blocks until ACM reports the cert ISSUED. Validation can happen via the
# manually-added Namecheap CNAME (step 4) — this resource polls the ACM API and
# succeeds regardless of which DNS provider serves the record.
resource "aws_acm_certificate_validation" "site" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
