const dgram = require('dgram');
const os = require('os');

const MULTICAST_PORT = Number(process.env.MULTICAST_PORT || 5678);
const MULTICAST_ADDRESS = process.env.MULTICAST_ADDRESS || '224.0.0.42';
const INTERVAL = Number(process.env.INTERVAL || 3000);
const MESSAGE = process.argv.slice(2).join(' ') ||
  new Buffer('Hello from ' + os.userInfo().username + '!', 'utf8');

const socket = createSocket();
bindSocket(socket);
startBroadcast(socket);

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

    configureSocket(socket);
  });

  socket.bind(MULTICAST_PORT);
}

function configureSocket(socket) {
  socket.setBroadcast(true);

  const interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach((name) => {
    interfaces[name].forEach((iface) => {
      if (!iface.internal && iface.family === 'IPv4') {
        socket.addMembership(MULTICAST_ADDRESS, iface.address);
      }
    });
  });
}

function startBroadcast(socket) {
  setInterval(() => {
    socket.send([MESSAGE], MULTICAST_PORT, MULTICAST_ADDRESS, (err) => {
      if (err) {
        console.error('Error: %s', err.stack || err.message || err);
      } else {
        console.log('Sent: %s', MESSAGE);
      }
    });
  }, INTERVAL);
}
//
