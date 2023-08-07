FROM node:16-bullseye

RUN mkdir -p /usr/src/app 

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE  6790

