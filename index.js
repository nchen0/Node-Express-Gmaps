const express = require('express');

const server = express();

console.log(server);


server.listen(8000, () => console.log("API running on port 8000")