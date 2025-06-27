FROM node:18

WORKDIR /easy-notes-frontend

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
