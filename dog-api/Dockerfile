FROM node:14 as node-builder

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.build.json /app/tsconfig.build.json
COPY src /app/src


RUN yarn install --frozen-lockfile

COPY node_modules /app/node_modules

FROM mcr.microsoft.com/playwright:v1.24.2-focal as e2e-runner

WORKDIR /app

COPY --from=node-builder app /app

EXPOSE 3000

CMD ["yarn", "start:dev"]
