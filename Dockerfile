FROM node:14-alpine as build

ENV PORT=4050
WORKDIR /app
COPY . /app/
RUN yarn install && yarn build:ssr

FROM alpine:latest

LABEL AUTHOR="Jan Kuri" AUTHOR_EMAIL="jkuri88@gmail.com"

ENV PORT=4050
WORKDIR /app

COPY --from=build /usr/local/bin/node /usr/bin
COPY --from=build /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
COPY --from=build /app/dist ./dist

EXPOSE 4050

CMD ["node", "/app/dist/server/main.js"]
