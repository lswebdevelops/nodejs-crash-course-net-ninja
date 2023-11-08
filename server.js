const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request made');
    // console.log(req.url, req.method);// "/"
    // set header content type: 
    // res.setHeader('Content-Type', 'text/plain')
    // res.write("hello world!")
    res.setHeader('Content-Type', 'text/html')
    res.write('<head><link rel="stylesheet" href="#" ></head>')
    res.write("<h1>h1 part!</h1>")
    res.write("<h2>h2 part!</h2>")
    res.write("<p>hello world!</p>")

    res.end();

});

server.listen(3000 , 'localhost' , () => {
    console.log('listening for requests on port 3000');
})
