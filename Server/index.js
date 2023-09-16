import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';


const app = express(); // Create an Express.js application
const server = http.createServer(app);
app.use(cors());
const io = new Server(server) //express server created inside socket instance

app.get('/', (req, res) => {
    console.log("Running")
    res.sendFile(new URL('D:/ChatApp/Client/index.html', import.meta.url).pathname);
});

io.on("connection", (socket) => {
    console.log(" A user Connected", socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})


server.listen(8000, () => console.log("Server is running now"));