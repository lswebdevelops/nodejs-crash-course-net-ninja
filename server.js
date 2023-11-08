const http = require("http");
const fs = require("fs");
//  npm i --save lodash
const _ = require('lodash')


const server = http.createServer((req, res) => {

    // loadash

    // const num = _.random(0, 20);
    // console.log(num);
// just runs once
    // const greet = _.once(() => {
    //     console.log('hello');
    // })

    // greet()  // hello
    // greet() // > here it is not loading
  
  // set header content type
  res.setHeader("Content-Type", "text/html");

  //path

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
    // page moved : 301      
      res.statusCode = 301;
      res.setHeader('Location', '/about')
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
