import express from 'express';
import cors from 'cors';
import {createServer} from 'http';
import {Server, Socket} from 'socket.io';
import {services} from './services/services';
import config from './config.json';
import {IoCommandEnum} from './enums/IoCommandEnum';
import {MessageEnum} from './enums/MessageEnum';
import {TagEnum} from './enums/TagEnum';
import {ServerCommandRegister} from "./events/ServerCommandRegister";

const httpServer = createServer();
const app = express();
const io = new Server(httpServer, {
    cors: config.cors
});
const PORT = config.port;
app.use(cors());

io.on(IoCommandEnum.CONNECTION, (socket: Socket) => {
    services.log.info(TagEnum.App, `${MessageEnum.SOCKET_CONNECTED} - ${socket.id} `);

    new ServerCommandRegister(socket);

    // socket.join("room-" + roomno);
    //Send this event to everyone in the room.
    // io.sockets.in("room-" + roomno).emit('connectToRoom', "You are in room no. " + roomno);
});

httpServer.listen(PORT, () => {
    services.log.info(TagEnum.App, `${MessageEnum.CONNECTED_AND_LISTENING_PORT} ${PORT}`);
});