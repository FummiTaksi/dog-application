import * as docker from "@pulumi/docker";

const dogDbContainer = new docker.Container("DogDb", {
  image: "postgres",
  ports: [{ external: 5432, internal: 5432 }],
  envs: ["POSTGRES_USER=dog", "POSTGRES_PASSWORD=password", "POSTGRES_DB=dog"],
});

const dogApiDockerImagePath = "../dog-api/Dockerfile";
const dogApiImage: docker.Image = new docker.Image("DogApiImage", {
  imageName: "dog-api-prod",
  build: {
    dockerfile: dogApiDockerImagePath,
    context: "../dog-api",
  },
  skipPush: true,
});

const dogApiContainer = new docker.Container("DogApi", {
  image: dogApiImage.baseImageName,
  ports: [{ external: 3000, internal: 3000 }],
  envs: [
    "TYPEORM_HOST=host.docker.internal",
    "TYPEORM_PORT=5432",
    "TYPEORM_USERNAME=dog",
    "TYPEORM_PASSWORD=password",
    "TYPEORM_DATABASE=dog",
    "TYPEORM_MIGRATIONS_TABLE_NAME=migrations",
    "TYPEORM_MIGRATIONS_DIR=src/migrations",
  ],
  restart: "on-failure",
  workingDir: "/app",
});

const dogFrontendDockerImagePath = "../react-query-test/Dockerfile";

const dogFrontendImage: docker.Image = new docker.Image("DogFrontendImage", {
  imageName: "dog-frontend-prod",
  build: {
    dockerfile: dogFrontendDockerImagePath,
    context: "../react-query-test",
    args: {
      NEXT_PUBLIC_BACKEND_HOST: "http://localhost:3000",
    },
  },
  skipPush: true,
});

const dogFrontendContainer = new docker.Container("DogFrontend", {
  image: dogFrontendImage.baseImageName,
  ports: [{ external: 8080, internal: 8080 }],
  envs: ["NEXT_PUBLIC_BACKEND_HOST=http://localhost:3000"],
  restart: "on-failure",
  workingDir: "/app",
});

export const dogDbContainerName = dogDbContainer.name;
export const dogApiContainerName = dogApiContainer.name;
export const dogFrontendContainerName = dogFrontendContainer.name;
