FROM node:16

WORKDIR /app/front

COPY ./front/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
#CMD ["tail", "-f", "/dev/null"]