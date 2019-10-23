FROM node:10-alpine 

WORKDIR /app

COPY . .

RUN chown -R node:node /app

USER node

# RUN addgroup -S custom && adduser -DH -s /bin/false -G custom custom
# RUN chown -R custom:custom /app
# USER custom

CMD ["node", "index.js"]