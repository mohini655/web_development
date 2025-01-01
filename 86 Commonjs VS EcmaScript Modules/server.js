// const http = require('node:http');  // commonjs
// import http from "http" // default import in module
// const hostname = '127.0.0.1';
// const port = 5500;

// const server = http.createServer((req, res) =>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Helloooo India');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import {name} from "./modules.js"; // named import
console.log(name);

import xyz from "./modules.js"; // default import
console.log(xyz);