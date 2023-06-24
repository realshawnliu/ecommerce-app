import products from "./data/products.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);

app.use(notFound);
app.use(errorHandler);

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`server is running on port ${port}`));
