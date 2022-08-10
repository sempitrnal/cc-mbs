FROM node:16-alpine

#Setup working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

#Copy source files
COPY . .

#Running the app
CMD ["yarn","dev"]