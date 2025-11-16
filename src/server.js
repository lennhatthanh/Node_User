import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import { swaggerDocs } from './swagger.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
swaggerDocs(app);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
