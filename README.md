# dog-application

Application which purpose is to practice software development and store dogs.


### Prerequisities
Docker


## How to run locally


### Production 

```
docker-compose -f docker-compose-prod.yml up
```

And open `localhost:8080`


## Build backend

Ensure you are in right project with 

```
gcloud config get-value project
```
, enable Artifact Registry API , create repository named `dog-application`

and run

````
cd dog-api
gcloud builds submit --tag europe-north1-docker.pkg.dev/efi-ig-serverless-2023/dog-application/dog-api
```