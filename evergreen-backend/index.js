// Load the http module to create http server.
import http from 'http';
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
// Configure HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello World!');
});

server.listen(port);

// Put message on the terminal to verify it works
console.log(`Server running at ${port}`);
