const cluster = require("node:cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 786;

  app.get("/", (req, res) => {
    return res.json({ message: `Hello from Express Server ${process.pid}` });
  });

  app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
}
