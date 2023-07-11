FROM node:18 as base
WORKDIR /app
RUN npm -g install pnpm@8
COPY package.json pnpm-lock.yaml ./

FROM base as builder
RUN pnpm install --frozen-lockfile
COPY . .
RUN mv .env.sample .env
RUN pnpm exec svelte-kit sync
RUN pnpm run build

FROM base as runner
RUN pnpm install --frozen-lockfile --prod
COPY --from=builder /app/build ./build

STOPSIGNAL SIGTERM
EXPOSE 3000
CMD ["node", "build"]
