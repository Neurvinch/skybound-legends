import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server( server , {
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log(`a user connected : ${socket.id}`);

    socket.on('playerMovement', (data) => {
        socket.broadcast.emit('playerMoved' , data);

    });

    socket.on('disconnect', () => {
        console.log(`a user disconnected : ${socket.id}`);
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});