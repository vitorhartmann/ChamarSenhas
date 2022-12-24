const koa = require('koa');
const http = require('http');
const socket = require('socket.io');

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server);

const SERVER_HOST = '192.168.16.100';
const SERVER_PORT = 8080;

const passwords = {
  normal: [],
  all: [],
};

const generatePasswords = () => {
  for (let i = 1; i <= 99; i++) {
    const value = `N${i.toString().padStart(2, '0')}`;
    passwords['normal'].push(value);
    passwords['all'].push(value);
  }
};

generatePasswords();

const handleNextPassword = (data, firstPassword) => {
  io.sockets.emit('password.next', firstPassword);
  io.sockets.emit('password.tv.update', firstPassword);
  io.sockets.emit(`password.tv.${data}`, firstPassword);

  console.log(`[SOCKET] [SERVER] => NEXT PASSWORD ${firstPassword}`);

  if (firstPassword === "N99") {
    passwords['all'] = [...passwords['normal']];
  } else {
    passwords['all'].splice(0, 1);
  }
};

io.on('connection', socket => {
  console.log('[IO - CLIENT] Connection => server has a new connection');

  socket.on('password.send', data => {
    console.log('[SOCKET SERVER] New password type => ', data);

    io.sockets.emit('object.passwords', passwords);
  });

  socket.on('password.next', data => {
    const firstPassword = passwords['all'][0];
    handleNextPassword(data, firstPassword);
  });

  socket.on('disconnect', () => {
    console.log('[SOCKET SERVER] User Disconnect')
  })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log('[http] Server running...')
})

server.off('server.off', () => {
  console.log('[http] Server stopping...')
})
