FROM node:alpine3.10

RUN npm i -g ts-node typescript

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8000

CMD ["ts-node", "index.ts"]