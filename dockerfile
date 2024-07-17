# Stage 1: Build the frontend
FROM node:16-alpine as build-frontend

# Set working directory
WORKDIR /app

# Copy main package.json and install dependencies for both backend and frontend
COPY package.json ./
RUN npm install

# Copy the frontend package.json and install frontend dependencies
COPY frontend/package.json ./frontend/
RUN npm install --prefix frontend

# Copy the frontend source code and build it
COPY frontend ./frontend/
RUN npm run build --prefix frontend

# Stage 2: Set up the backend
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy main package.json and install backend dependencies
COPY package.json ./
RUN npm install

# Copy backend source code
COPY backend ./backend

# Copy the built frontend files from the build stage
COPY --from=build-frontend /app/frontend/dist ./frontend/dist

# Copy environment variables file from the context root
COPY .env .env

# Expose the port the app runs on
EXPOSE 5000

# Start the backend server
CMD ["npm", "run", "start"]
