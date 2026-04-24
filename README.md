# StrelkaVPS — landing

React + TypeScript + Vite. Модульная архитектура.

## Разработка

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # прод-сборка → dist/
npm run preview   # локальный предпросмотр прод-сборки
```

## Деплой на Netlify

### Вариант 1 — Git-интеграция (рекомендуется)

1. Запушьте репозиторий на GitHub / GitLab / Bitbucket.
2. В Netlify: **Add new site → Import an existing project** → выберите репо.
3. Настройки уже прописаны в `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node: `22`
4. Deploy.

Если Git-репозиторий находится в папке-родителе (`private-vps-landing/`), а не в `strelkavps/`, укажите в Netlify **Base directory** на подпапку.

### Вариант 2 — Netlify CLI

```bash
npm i -g netlify-cli
netlify login
netlify init          # привязать к сайту
netlify deploy        # превью
netlify deploy --prod # продакшн
```

### Вариант 3 — Drag & drop

```bash
npm run build
```

Затем перетащите папку `dist/` на https://app.netlify.com/drop.

## Деплой на VPS через Docker

Образ — multi-stage: Node 22 билдит статику, nginx 1.27-alpine её отдаёт. Все юр-страницы (`/terms`, `/privacy-policy`, `/cancel`, `/signup`) работают через SPA-fallback на `index.html`.

### Локально — проверить образ

```bash
# из папки strelkavps/
docker build -t strelkavps-landing:latest .
docker run --rm -p 8080:80 strelkavps-landing:latest
# http://localhost:8080 — открыть и потыкать ссылки футера
```

### Через docker-compose (на VPS)

```bash
# на сервере
git clone git@github.com:kwtpub/vps-landing.git
cd vps-landing/strelkavps           # или актуальное имя папки
docker compose up -d --build
docker compose logs -f web          # убедиться, что nginx поднялся
```

По умолчанию контейнер слушает `8080` на хосте (`HTTP_PORT` можно переопределить в `.env` или через переменную окружения). Healthcheck — `GET /healthz` (возвращает `ok`).

### За реверс-прокси (traefik / caddy / nginx хоста)

Уберите блок `ports:` из `docker-compose.yml` и подключите контейнер в общую docker-сеть прокси:

```yaml
services:
  web:
    networks:
      - web
    # ports: убраны — весь трафик через прокси
networks:
  web:
    external: true
```

Пример для **caddy** (выдаёт TLS сам через Let's Encrypt):

```caddy
strelkavps.io, www.strelkavps.io {
    encode zstd gzip
    reverse_proxy strelkavps-landing:80
}
```

Пример для **traefik** (labels):

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.strelkavps.rule=Host(`strelkavps.io`)"
      - "traefik.http.routers.strelkavps.entrypoints=websecure"
      - "traefik.http.routers.strelkavps.tls.certresolver=letsencrypt"
      - "traefik.http.services.strelkavps.loadbalancer.server.port=80"
```

### Обновление на проде

```bash
git pull
docker compose up -d --build
docker image prune -f
```

Vite выдаёт хэшированные имена (`index-xxx.js` / `index-xxx.css`), так что старые файлы отправляются клиенту с `Cache-Control: immutable`, а `index.html` — с `no-cache`: развёртывание новой версии сразу видно без ручной инвалидации кэша.

### Хардининг в `docker-compose.yml`

- `read_only: true` + `tmpfs` на `/tmp`, `/var/cache/nginx`, `/var/run`
- `no-new-privileges: true`
- `cap_drop: [ALL]` + возврат только минимально необходимых для nginx
- `logging`: json-file с ротацией 10MB × 3

## Что внутри конфигурации деплоя

- `Dockerfile` — multi-stage: Node builder → nginx runtime с healthcheck.
- `nginx.conf` — SPA-fallback, gzip, кэш-заголовки, безопасные дефолты, `/healthz`.
- `docker-compose.yml` — прод-профиль с хардинингом.
- `.dockerignore` — исключает `node_modules`, `dist`, `.git`, секреты.
- `netlify.toml` — альтернативный деплой на Netlify (не обязателен для Docker).
- `public/_redirects` — дубль SPA-fallback для Netlify.
- `.nvmrc` — фиксирует Node 22 для локальной разработки.

## Структура

```
src/
├── App.tsx, main.tsx
├── components/
│   ├── layout/        Header, Footer
│   ├── sections/      Hero, Metrics, Ticker, Plans, Configurator,
│   │                  Locations, Features, Privacy, Stack, TrustLog, Faq, FinalCta
│   └── ui/            Button, SectionHead, BrandMark, FeatureIcon
├── data/              plans, locations, features, faq, trustLog, facts, stack, ticker
├── hooks/             useConfigurator, useLiveCounter, useShimmer
└── styles/            variables.css, global.css
```

Тема переключается атрибутом `data-theme` на `<html>` в `index.html` (`noir` — тёмная, без атрибута — светлая).
