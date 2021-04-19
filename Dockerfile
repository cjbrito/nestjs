FROM node:14
WORKDIR /demo
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]