FROM node:14

WORKDIR /usr/src/app/front

COPY package.json /usr/src/app/front
COPY yarn.lock /usr/src/app/front

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn dev