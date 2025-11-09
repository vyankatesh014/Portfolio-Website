// Minimal HTTP server to avoid ENOENT when starting server in development
// This is a placeholder. Replace with your Express app if you have one.
const http = require('http');

const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server placeholder running');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(port, () => {
  console.log(`Placeholder server listening on port ${port}`);
});
