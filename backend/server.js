import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import connect from "./DataBase/mongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.send("Server is perfectly running without any issues");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
