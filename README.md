# Strelka VPN — landing

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

Если Git-репозиторий находится в папке-родителе (`private-vps-landing/`), а не в `strelka-vpn/`, укажите в Netlify **Base directory: `strelka-vpn`**.

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

## Что внутри конфигурации деплоя

- `netlify.toml` — build-команда, publish-папка, Node-версия, SPA-редирект, кэш-заголовки.
- `public/_redirects` — дубль SPA-fallback.
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
