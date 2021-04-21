FROM node:erbium-alpine3.12 AS Development
WORKDIR /home/demo
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
