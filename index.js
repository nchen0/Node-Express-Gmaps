const express = require("express");

const server = express();

server.get("/places", (req, res) => {
  res.send("test working");
  res.end();
});

server.listen(8000, () => console.log("API running on port 8000"));
