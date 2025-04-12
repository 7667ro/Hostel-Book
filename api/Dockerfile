FROM node:alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT=3010
ENV PORT=$PORT
EXPOSE $PORT

CMD ["npm", "start"]
