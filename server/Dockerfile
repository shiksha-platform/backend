FROM node:16 as development
WORKDIR /app
RUN chmod 777 -R /app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build