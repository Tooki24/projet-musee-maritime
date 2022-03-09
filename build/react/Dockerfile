FROM node:16

WORKDIR /app/front

#COPY package*.json ./

RUN npm install yarn
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]