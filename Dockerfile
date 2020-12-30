FROM node:15-alpine as build

WORKDIR /app
COPY . /app/
RUN npm install && npm run build:ssr

FROM alpine:latest

LABEL AUTHOR="Jan Kuri" AUTHOR_EMAIL="jkuri88@gmail.com"

WORKDIR /app

COPY --from=build /usr/local/bin/node /usr/bin
COPY --from=build /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
COPY --from=build /app/dist ./dist

EXPOSE 4050

CMD ["node", "/app/dist/server/main.js"]
