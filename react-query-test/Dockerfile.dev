FROM node:14.17-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json /.
COPY src ./src

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn install --frozen-lockfile

EXPOSE 3001

CMD ["yarn", "dev"]
