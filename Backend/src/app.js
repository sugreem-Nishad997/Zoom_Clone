import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";

import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from './routes/user.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || "8000"));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true }));

app.use( userRoutes);

// app.post("/hello", (req, res) => {
//     const{name, username, password} = req.body;
//     res.send(`hello ${name}`);
// });

const start = async(req, res) => {
    const connectionDB = await mongoose.connect("mongodb+srv://sugreemn86:pEH7ZnaoiF0vo2Sa@cluster0.a27vi.mongodb.net/");
    server.listen(app.get("port"),(req, res) => {
        console.log(`Connect to DB with host: ${connectionDB.connection.host}`);
        console.log("Listening at port 8000");
    });
};

start();
