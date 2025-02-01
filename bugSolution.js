const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port or stop the conflicting process.`);
    process.exit(1);
  } else {
    console.error('An error occurred:', err);
    process.exit(1);
  }
}

try {
  startServer();
} catch (err) {
  handleError(err);
}
