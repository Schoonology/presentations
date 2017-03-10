const dgram = require('dgram');

const MULTICAST_PORT = Number(process.env.MULTICAST_PORT || 5678);

const socket = createSocket();
bindSocket(socket);

function createSocket() {
  const socket = dgram.createSocket('udp4');

  socket.on('message', (buffer) => {
    console.log('Received: %s', buffer);
  });

  socket.on('error', (err) => {
    console.error('Error: %s', err.stack || err.message || err);
  });

  return socket;
}

function bindSocket(socket) {
  socket.on('listening', () => {
    var info = socket.address();
    console.log('Listening on %s:%s', info.address, info.port);
  });

  socket.bind(MULTICAST_PORT);
}
//
