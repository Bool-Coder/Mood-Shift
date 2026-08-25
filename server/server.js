const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API works");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
