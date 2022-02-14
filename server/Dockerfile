FROM node:16 as build
WORKDIR /app
RUN chmod 777 -R /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build && npm prune --production


FROM node:16 as development 
ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

# Docker working directory
WORKDIR /app
RUN chmod 777 -R /app
COPY --from=build /app/ /app/

EXPOSE 9229

CMD ["npm", "run", "start:dev"]