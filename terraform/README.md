# Terraform

### Prerequisities

- Terraform version 1.3.1
- Google cloud CLI



## Setup

```
terraform init
```


### Apply changes

Select correct workspace:

````
terraform workspace select staging
````

Plan changes, make sure they look OK, then apply
```
terraform plan
terraform apply
```

destroy resources withh 

```
terraform destroy
```

