const express = require("express");

// express app

const app = express();

// register view engine
app.set('view engine', 'ejs');
// if a differente folder than view, as we are using view, it is not necessary
// app.set('view' , 'myviews')

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  //setting the root path
  res.render('index', { title: 'Home'})
});
app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about' , { title: 'About'})

});

app.get('/blogs/create', (req, res) => {
    res.render('create' , { title: 'New Blog'});
})
// 404 page
app.use((req, res) => {
  res.status(404).render('404' , { title: '404'})
});
