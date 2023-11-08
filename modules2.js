const fs = require("fs");

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);// <Buffer 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73 0d 0a>
//   console.log(data.toString()); ///hello, ninjas

// });

// writing files 

// fs.writeFile('./docs/blog1.txt', 'Hello World!', () => {
//     console.log("Files was written");
// })

// fs.writeFile('./docs/blog2.txt', 'Hello, from file blog2!', () => {
//     console.log("Files was written");
// })

// create directory
//if not exists:
if(!fs.existsSync('./assets')) {

    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder created');
    })   
    
    
}
// deleting directory
else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// if file exists
if(fs.existsSync('./docs/deleteme.txt')) {
    // delete it
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

