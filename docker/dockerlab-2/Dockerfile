FROM node:latest

LABEL maintainer="Benjamin A. Ludington"
LABEL description="The website tells you how it feels."
LABEL cohort="cohort-19"
LABEL animal="I don't remember"

WORKDIR /app

COPY . .

EXPOSE 8080/tcp

RUN npm install

CMD ["node", "server.mjs"]