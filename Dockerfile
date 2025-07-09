FROM oven/bun:latest AS deps
WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile 

FROM node:24-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_ADDRESS
ARG NEXT_PUBLIC_PHONE

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_SHARP_PATH=/app/node_modules/sharp
ENV NEXT_TELEMETRY_DISABLED=1
RUN realpath . 

RUN npm run build:content
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app

ARG NEXT_PUBLIC_ADDRESS
ARG NEXT_PUBLIC_PHONE
ENV NEXT_PUBLIC_ADDRESS=$NEXT_PUBLIC_ADDRESS
ENV NEXT_PUBLIC_PHONE=$NEXT_PUBLIC_PHONE

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js", "--hostname", "0.0.0.0"]
