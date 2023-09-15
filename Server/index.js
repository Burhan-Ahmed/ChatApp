import express from 'express';
import { Socket } from 'socket.io';
const app = express();


app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.listen(8000, () => console.log("Server is running now"));