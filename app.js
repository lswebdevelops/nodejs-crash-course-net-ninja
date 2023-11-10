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

app.use(express.static("public")); 
app.use(express.urlencoded({extended: true })); // takes the url unlencoded data
app.use(morgan("dev"));


// routes

app.get("/", (req, res) => {
  res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.render("about", { title: "About" });
});

// blog routes 

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })// the newest goes to the top
  .then((result) => {
    res.render('index', {title: 'All Blogs', blogs: result})
  })
  .catch((err) => {
    console.log(err);
  })
})

app.post('/blogs', (req, res) => {
 const blog = new Blog(req.body)
 blog.save()
 .then((result) => {
// after adding a new blog, redirects to the "/blogs' page
  res.redirect('/blogs');
 })
 .catch((err) => {
  console.log(err);
 })
})


app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
