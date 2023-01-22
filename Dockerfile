FROM node:18

RUN mkdir -p /opt
COPY . /opt/
WORKDIR /opt

RUN apt update
RUN apt install -y libpq-dev build-essential

RUN npm install 
RUN npx prisma generate
RUN npm build

CMD ["npm", "start:dev"]