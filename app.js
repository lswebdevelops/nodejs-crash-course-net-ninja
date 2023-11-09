const express = require("express");
const morgan = require('morgan')
// express app

const app = express();

// register view engine
app.set('view engine', 'ejs');
// if a differente folder than view, as we are using view, it is not necessary
// app.set('view' , 'myviews')

// listen for requests
app.listen(3000);
// middleware
// app.use((req, res, next) => {
// console.log('new request made: ');
// console.log('host: ', req.hostname);
// console.log('path: ', req.path);
// console.log('method: ', req.method);
// next();// it hangs, if not added next()
// });
// // meddleware
// app.use((req, res, next) => {
// console.log('next middleware ');

// next();// it hangs, if not added next()
// });

// middleware & static files 

app.use(express.static('public'))// everything in the public forlder, will be avilable to frontend >> in the case the styles.css from head.ejs
app.use(morgan('dev'));

app.get("/", (req, res) => {
    //setting the root path
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How do defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
//   res.render('index', { title: 'Home' , blogs:blogs}) or blogs
  res.render('index', { title: 'Home' , blogs})
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
