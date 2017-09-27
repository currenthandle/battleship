const express = require('express');
const server = express();

server.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Server running on port', PORT));
