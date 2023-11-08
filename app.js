const express = require('express')

// express app 


const app  = express();

// listen for requests
app.listen(3000)


app.get('/', (req, res) => {
    //setting the root path
 res.sendFile('./views/index.html', { root: __dirname})
})
app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
 res.sendFile('./views/about.html', { root: __dirname})
})
// redirect
app.get('/about-me', (req, res) => {
    // res.send('<p>about page</p>');
    res.redirect('/about')
})

// 404 page

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname})
})
