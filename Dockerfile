FROM mhart/alpine-node:10 as base

RUN apk --no-cache add git openssl python python2 alpine-sdk

FROM base as build

WORKDIR /app
COPY . /app/
RUN npm install && npm run build:ssr

FROM alpine:3.7

LABEL AUTHOR="Jan Kuri" AUTHOR_EMAIL="jan@bleenco.com"

WORKDIR /app

COPY --from=base /usr/bin/node /usr/bin
COPY --from=base /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/

COPY --from=build /app/package.json /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 4050

CMD ["node", "/app/dist/server.js"]
