FROM node:14-alpine

WORKDIR /apps/efishery

COPY package.json /apps/efishery
COPY package-lock.json /apps/efishery

RUN npm install && npm cache clean --force

COPY . ./apps/efishery

CMD ["npm", "start"]