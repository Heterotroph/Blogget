FROM node:10.12.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./
RUN npm run-script build
EXPOSE 3000
CMD ["npm","start"]
