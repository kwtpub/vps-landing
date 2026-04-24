# syntax=docker/dockerfile:1.7

# ──────────────────────────────────────────────────────────────────────────────
# 1) builder: Node 22 (alpine) собирает статику Vite в /app/dist
# ──────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Зависимости отдельным слоем — лучше кеш при правке исходников.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Исходники и сборка.
COPY tsconfig.json tsconfig.app.json tsconfig.node.json ./
COPY vite.config.ts eslint.config.js index.html ./
COPY public ./public
COPY src ./src

RUN npm run build

# ──────────────────────────────────────────────────────────────────────────────
# 2) runtime: nginx-alpine отдаёт /usr/share/nginx/html
# ──────────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

RUN apk add --no-cache curl \
  && rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/strelkavps.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx:alpine уже слушает 80 — выставляем явно для ясности.
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -fsS http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
