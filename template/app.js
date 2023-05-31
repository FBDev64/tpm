const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filePath = `./index.html`;

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath);
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': fileContents.length
    });
    res.end(fileContents);
  } else {
    res.sendStatus(404);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function blade() {
	console.log("Hello, world!");
	process.stdout.write("Logged\n");
}
