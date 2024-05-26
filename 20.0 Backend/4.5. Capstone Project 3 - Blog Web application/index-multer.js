import express from "express";
import bodyParser from "body-parser";
import session from "express-session"
import multer from "multer";

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
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  // Init upload
  const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 10MB file size limit
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    }
  }).single('blogImage');
  
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
  

app.get("/", (req, res) => {
    if (!req.session.data) {
        req.session.data = [];
        }
        console.log(req.session.data)
    res.render("index.ejs", {content: req.session.data})
});

app.post("/createBlog", (req, res) => {
    const { blogImage, blogTitle, blogDescription } = req.body
    req.session.data.push({ blogImage, blogTitle, blogDescription})
    res.render("index.ejs", {content: req.session.data})
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
