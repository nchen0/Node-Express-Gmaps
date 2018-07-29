const express = require("express");
const fetch = require("node-fetch");

const server = express();
server.use(express.json());

server.get("/places", (req, res) => {
  let name;
  fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=copenhagent&key=AIzaSyA1W5ZgRDi_tSLOQoDkpA-MC_x7dmHgTjM"
  )
    .then(response => res.status(200).json({ name: response.data.results[0].name }))

    .catch(err => {
      res.status(404).json({ message: err.message });
    });
});

server.listen(8000, () => console.log("API running on port 8000"));
