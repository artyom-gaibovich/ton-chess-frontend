FROM node:20

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm

RUN pnpm install:client

COPY . .

RUN pnpm run build:client

EXPOSE 3000
CMD ["pnpm", "run", "start:client"]
