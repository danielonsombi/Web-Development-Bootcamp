import express from "express";
import bodyParser from "body-parser";
import session from "express-session"
import multer from "multer";
import path from "path"
import {v4 as uuidv4 } from 'uuid';

const app = express()
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

//Create a session to hold your data using the express-session middleware:
app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
  }));

//For Images, you can not pass them directly to ejs. The file should be stored in the public folder first.
//Use the multer package to achieve this:
// Set up storage engine for multer
//const upload = multer({dest: './public/uploads/'})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/uploads/')
    },

    filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
    }
})

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10000000 }, // 10MB file size limit
    fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    }
})

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
    return cb(null, true);
    } else {
    cb('Error: Images Only!');
    }
}

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

let blogs = [];

app.get("/", (req, res) => {
    if (!req.session.data) {
        req.session.data = [];
        blogs = req.session.data;
    }
    res.render("index.ejs", {content: req.session.data})
});

app.get("/home", (req, res) => {
    res.render("index.ejs",{content: blogs })
})

app.post("/createBlog", upload.single('blogImage'), (req, res) => {
    // console.log(req.file.filename)

    const { blogTitle, blogDescription } = req.body
    blogs.push({ id:uuidv4(), blogImage: `/uploads/${req.file.filename}`, blogTitle, blogDescription})
    res.render("index.ejs", {content: blogs})
})

app.get("/viewBlog/:id", (req, res) => {
    const blog = blogs.find(i => i.id == req.params.id);
    res.render("blog/blogDetails.ejs",{blog: blog});
})

app.get("/editBlog/:id", (req, res) => {   
    const blog = blogs.find(i => i.id == req.params.id); 
    console.log(blog)
    res.render("blog/editDetails.ejs", { blog:blog });
})

app.post("/editBlog/:id", (req, res) => {   
    const blog = blogs.find(i => i.id == req.params.id); 
    console.log(blog)
    if (blog) {
        blog.blogTitle = req.body.blogTitle
        blog.blogDescription = req.body.blogDescription
        res.redirect(`/viewBlog/${blog.id}`)
    } else {
        res.status(404).send('Item not Found');
    }
})

app.post("/deleteBlog/:id", (req, res) => {   
    blogs = blogs.filter(i => i.id !== req.params.id); 
    res.redirect('/home');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
