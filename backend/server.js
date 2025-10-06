import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello from backend");
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
    connectDB();

});

