FROM node:14-alpine as build

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.build.json /app/tsconfig.build.json
COPY src /app/src

RUN yarn install --frozen-lockfile && yarn build

FROM node:14-alpine as deploy

WORKDIR /app

ARG NODE_ENV=production
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --prod

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
