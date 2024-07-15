# Use Node.js for the build environment
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json .

# Install dependencies for both backend and frontend
RUN npm install && npm install --prefix frontend

# Copy the entire project to the working directory
COPY . .

# Build the frontend
RUN npm run build --prefix frontend

# Use Node.js for the production environment
FROM node:16 AS production

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json .

# Install only production dependencies
RUN npm install --only=production

# Copy the backend code
COPY backend ./backend

# Copy the frontend build to the backend's public directory
COPY --from=build /app/frontend/build ./backend/public

# Set the environment variable
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD ["node", "backend/server.js"]
