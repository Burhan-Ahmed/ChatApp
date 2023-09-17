import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';


const app = express(); // Create an Express.js application
const server = http.createServer(app);
app.use(cors());
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5000', // Replace with your frontend's URL
        methods: ['GET', 'POST'], // Allow the necessary HTTP methods
        credentials: true, // Allow cookies and credentials
    },
});

app.get('/', (req, res) => {
    console.log("Running")
    res.sendFile('D:/ChatApp/Client/index.html');
});

io.on("connection", (socket) => {
    console.log(" A user Connected", socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('message', (msg) => {
        io.emit('message', msg);
        console.log('Message received and broadcasted:', msg);
    });
})

server.listen(8000, () => console.log("Server is running now"));