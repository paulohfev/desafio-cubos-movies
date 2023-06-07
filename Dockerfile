FROM node:17-alpine as development

ARG REACT_APP_MOVIEDB_API_CHAVE
ENV REACT_APP_MOVIEDB_API_CHAVE=$REACT_APP_MOVIEDB_API_CHAVE

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
