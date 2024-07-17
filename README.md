

# Twitter Clone

This project is a full-stack clone  application with a backend built with Node.js and a frontend built with React. The project is structured into two main folders: `backend` and `frontend`.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## Getting Started

To get started with the project, follow the instructions below:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Run the production server:**
   ```bash
   npm run start
   ```

## Project Structure

The project is structured into two main folders:

- **backend**: Contains the server-side code.
- **frontend**: Contains the client-side code.

```
project-name/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── package.json
└── README.md
```


## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose, Cloudinary
- **Frontend**: React,tanstack/react-query , Material-UI, 
- **Other**: cross-env, nodemon


## To run the docker container
docker run -p 5000:5000 --env-file .env twitter-app

---
