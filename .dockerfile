FROM node:18-alpine
WORKDIR /app
COPY . .
ENV NODE_ENV production
RUN npm install --production
CMD ["npm", "prod"]
EXPOSE 3000