FROM node:8-alpine

RUN npm install -g ts-node typescript

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 8000

CMD ["ts-node", "index.ts"]
