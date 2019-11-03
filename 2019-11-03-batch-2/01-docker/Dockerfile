FROM node:8-alpine

RUN npm i -g typescript ts-node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["ts-node", "index.ts"]