const express = require("express");

const app = express();
const PORT = 786;

app.get("/", (req, res) => {
  return res.json({ message: `Hello from Express Server ${process.pid}` });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
