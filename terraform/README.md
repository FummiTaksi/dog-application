# Terraform

## Setup

Generate credentials with enough privileges and rename the file in to this folder by name `google-cloud-credentials.json` . 

Copy the contents of `tfvars.dist` to `genera.tfvars` with the correct values

## Run terraform

Plan the changes with:

````
terraform plan --var-file genera.tfvars
````

If changes looks reasonable, apply the changes with:


```
terraform apply --var-file genera.tfvars
```
