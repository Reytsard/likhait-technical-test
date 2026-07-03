FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
<<<<<<< Updated upstream
=======
RUN npm install @rollup/rollup-linux-x64-musl

>>>>>>> Stashed changes
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]