FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 1337
CMD ["npm","start"]