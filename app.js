import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./src/config/database.js";
import { userRoutes } from "./src/routes/user.routes.js";


dotenv.config()

const app = express();
const PORT = process.env.PORT;

//aca irian middlewares
app.use(express.json());
app.use(cors())


//puertos
app.use ("/api",userRoutes)


app.listen(PORT, async () => {
    await connectDB();
  console.log(`El server está corriendo en: http://localhost:${PORT}`)
})
