# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production


# Copy the rest of the application code
COPY . .
# Copiar el archivo .env a la imagen
COPY .env .env

# Expose the port the app runs on
EXPOSE 4500

# Command to run the application
CMD ["node", "index.js"]