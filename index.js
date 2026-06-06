const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/TestAPI" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to our website" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at Port : ${PORT}`);
  console.log(`Open in browser: http://localhost:${PORT}/TestAPI`);
});
