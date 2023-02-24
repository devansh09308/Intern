const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const WebSocket = require('ws');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(19000, () => {
    console.log('listening on *:19000');
  });

const ws = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')

ws.onopen = () => {
    // connection opened
    ws.send('something'); // send a message
};

ws.onmessage = e => {
    // a message was received
    console.log(e.data);
    ws.send(JSON.stringify(e.data));
};

ws.onerror = e => {
    // an error occurred
    console.log(e.message);
};

ws.onclose = e => {
    // connection closed
    console.log(e.code, e.reason);
};

