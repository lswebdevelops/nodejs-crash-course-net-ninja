// // export from people file
// const xyz = require("./people"); // const people = ['yoshi', 'ryu', 'chun-li', 'luigi', 'mario']
// const { country } = require("./people");

// console.log(xyz.people); //  ['yoshi', 'ryu', 'chun-li', 'luigi', 'mario']
// console.log(xyz.ages); // [ 20, 30, 50, 1, 25
// console.log(country); //[ 'Brazil', 'USA', 'Germany' ]

// const os = require("os");

// // console.log(os);
// /*
// UV_UDP_REUSEADDR: 4,
// dlopen: [Object: null prototype] {},
// errno: [Object: null prototype] {
//     E2BIG: 7,
//     EACCES: 13,
//     EADDRINUSE: 100,etc... 
    
//     */

// console.log(os.platform(), os.homedir());
// console.log(os.machine()); // x86_64
// console.log(os.version()); // windows 10 pro
// console.clear();

// reading files
const fs = require("fs");

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
