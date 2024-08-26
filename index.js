import express from "express";
import cors from "cors";
import useRoutes from "../api/routers/books.js"

const app = express()
const PORT = 3333

app.use(cors());
app.use(express.json())

app.use("/", useRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor on PORT http://localhost:${PORT}`)
});
