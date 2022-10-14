data "google_secret_manager_secret_version" "staging-database-password" {
  provider = google-beta

  project = var.gcloud_project
  secret  = "staging-database-password"
  version = "1"
}
