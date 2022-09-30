FROM node:14-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src

ARG NEXT_PUBLIC_BACKEND_HOST
ARG NEXT_TELEMETRY_DISABLED=1

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:14-alpine as deploy

WORKDIR /app

COPY --from=build /app/.next ./.next

COPY --from=build /app/package.json ./package.json

COPY public ./public

RUN yarn install --prod

ENV NODE_ENV=production

EXPOSE 8080

CMD ["yarn", "start"]
