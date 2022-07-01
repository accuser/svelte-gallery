FROM accuser/node-pnpm:latest

WORKDIR /app

COPY pnpm-lock.yaml ./

RUN pnpm fetch --dev

ADD . ./

RUN pnpm install --offline --dev
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "preview" ]