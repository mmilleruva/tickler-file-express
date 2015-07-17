FROM node:0.10

ADD . /code
WORKDIR /code
RUN rm -rf node_modules && npm install
CMD npm run dev
