FROM node:14-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.build.json /app/tsconfig.build.json
COPY src /app/src

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start:dev"]