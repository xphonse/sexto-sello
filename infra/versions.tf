terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.40.0, < 7.0.0"
    }
  }

  # State is local (terraform.tfstate, gitignored) per the migration plan.
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = "sextosello"
      ManagedBy = "terraform"
    }
  }
}

# CloudFront requires its ACM certificate to live in us-east-1, regardless of
# where the rest of the stack runs. This aliased provider pins that hard AWS
# rule; the ACM resources reference it explicitly.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project   = "sextosello"
      ManagedBy = "terraform"
    }
  }
}
