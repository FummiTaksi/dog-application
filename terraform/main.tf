provider "google" {
  project = var.gcloud_project
  region  = var.gcloud_region
  zone    = var.gcloud_zone
}

locals {
  environment_name = var.environment_name_by_workspace[terraform.workspace]
  typeorm_password  = data.google_secret_manager_secret_version.staging-database-password.secret_data
}


terraform {
  backend "gcs" {
    bucket = "dog-application-tf-state"
    prefix = "terraform/state"
  }
}

resource "google_project_service" "service" {
  for_each = toset([
    "sqladmin.googleapis.com",
    "containerregistry.googleapis.com",
    "run.googleapis.com",
    "iam.googleapis.com",
    "cloudresourcemanager.googleapis.com",
  ])

  service = each.key

  project            = var.gcloud_project
  disable_on_destroy = false
}


module "google_cloud_sql" {
  source = "./modules/cloud-sql"

  environment_name = local.environment_name
  dog_backend_sql_database_instance_name = "${local.environment_name}-dog-db"
  gcloud_region =  var.gcloud_region
  gcloud_zone = var.gcloud_zone
  database_max_connections = var.database_max_connections
  typeorm_password = local.typeorm_password
}

module "cloud_run" {
  source = "./modules/cloud-run"

  environment_name = local.environment_name
  gcloud_region =  var.gcloud_region
  gcloud_zone = var.gcloud_zone
  typeorm_password = local.typeorm_password
  gcloud_project = var.gcloud_project
  dog_backend_service_name = "dog-api"
  instance_connection_name = module.google_cloud_sql.instance_connection_name
  google_sql_database_name = module.google_cloud_sql.google_sql_database_name
  google_sql_user_name = module.google_cloud_sql.google_sql_user_name


  depends_on = [google_project_service.service, module.google_cloud_sql]
}