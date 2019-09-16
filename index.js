// implement your API here
const server = require('./server.js');

const port = 5000;

server.listen(port, () => console.log(`\n===SERVER LISTENING ON ${port}===\n`));
