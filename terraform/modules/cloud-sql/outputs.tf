output "instance_connection_name" {
  value       = google_sql_database_instance.instance.connection_name
  description = "Connection name"
}

output "google_sql_user_name" {
  value = google_sql_user.user.name
  description = "Cloud SQL user name"
}

output "google_sql_database_name" {
  value = google_sql_database.database.name
  description = "Database name"
}