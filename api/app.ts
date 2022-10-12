import {IUser} from '../front/src/lib/interfaces/IUser'
import config from './config.json'

const app = require('express')();
const http = require('http').Server(app);
const cors = require("cors")

const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let users: any = {}
const PORT = 8080
app.use(cors())

io.on('connection', function (socket: any) {
  console.log("Socket connected")
  // socket.join("room-" + roomno);
  //Send this event to everyone in the room.
  // io.sockets.in("room-" + roomno).emit('connectToRoom', "You are in room no. " + roomno);
  socket.on("user:connect", (data: IUser, response: any) => {
    const {name, id} = data

    if (name in users) {
      response(true, "El usuario ya existe")
      return
    }

    socket.user = {name, id};

    users[name] = {
      socket,
      ...socket.user
    }

    response(false, data)
  })

  socket.on("disconnect", (reason: string) => {
    if (reason === "io server disconnect") {
      socket.connect();
    }
    delete users?.[socket?.user?.name]
  });
})

http.listen(PORT, function () {
  console.log(`listening on localhost:${PORT}`);
});
