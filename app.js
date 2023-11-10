const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app

const app = express();

//creating mongodb conection
const dbURI =
  "mongodb+srv://blog-ninja:wqrd25qMvhVuceT6@node-tuts.qo8q9kc.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  // only listen to requests, after connection is successiful
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

app.use(express.static("public")); // everything in the public forlder, will be avilable to frontend >> in the case the styles.css from head.ejs
app.use(morgan("dev"));

// mongoose and mongo sandbox routes:
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('654d3904124d318ea780db5e')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// routes

app.get("/", (req, res) => {
  //setting the root path
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How do defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //   res.render('index', { title: 'Home' , blogs:blogs}) or blogs
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
