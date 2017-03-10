const dgram = require('dgram');
const fs = require('fs');
const os = require('os');

const MULTICAST_PORT = Number(process.env.MULTICAST_PORT || 5678);
const MULTICAST_ADDRESS = process.env.MULTICAST_ADDRESS || '224.0.0.42';
const OUTPUT_PIN = process.env.OUTPUT_PIN || null;
const INTERVAL = Number(process.env.INTERVAL || 3000);
const MESSAGE = process.argv.slice(2).join(' ') ||
  new Buffer('Hello from ' + os.userInfo().username + '!', 'utf8');

const socket = createSocket();
bindSocket(socket);
startBroadcast(socket);
initializeGPIO(socket);

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

function initializeGPIO(socket) {
  if (!OUTPUT_PIN) {
    return;
  }

  const gpioPath = '/sys/class/gpio/gpio' + OUTPUT_PIN;

  if (OUTPUT_PIN) {
    // Signal to systemd to export our GPIO virtual files.
    if (!fs.existsSync(gpioPath)) {
      fs.writeFileSync('/sys/class/gpio/export', OUTPUT_PIN);
    }

    // Hardcoded wait for systemd to update write permissions.
    setTimeout(() => {
      fs.writeFileSync(gpioPath + '/direction', 'out');
    }, 100);
  }

  socket.on('message', () => {
    if (OUTPUT_PIN) {
      fs.writeFileSync(gpioPath + '/value', 1);

      setTimeout(() => {
        fs.writeFileSync(gpioPath + '/value', 0);
      }, 50);
    }
  });
}
