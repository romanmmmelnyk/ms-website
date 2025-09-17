# ===== build stage =====
FROM node:20-alpine AS build
WORKDIR /app

# окремо пакети для кешу
COPY package*.json ./
RUN npm ci

# копіюємо код і будуємо
COPY . .
RUN npm run build

# ===== run stage (serve) =====
FROM node:20-alpine
WORKDIR /app

# лише мінімум для віддачі статики
RUN npm install -g serve

# беремо тільки зібраний артефакт
COPY --from=build /app/dist /app/dist

# без root — трішки безпечніше
USER node

EXPOSE 9100
HEALTHCHECK CMD wget -qO- http://127.0.0.1:9100/ >/dev/null || exit 1

CMD ["serve", "-s", "dist", "-l", "9100"]
