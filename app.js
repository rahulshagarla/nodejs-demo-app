const http = require("http");

function getMessage() {
  return "Hello from Node.js CI/CD Pipeline!";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(getMessage());
});

if (require.main === module) {
  server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
  });
}

module.exports = { getMessage };
