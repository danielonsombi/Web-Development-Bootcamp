import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Hello, World!</h1>");
})

app.get("/Contact", (req, res) => {
    res.send("<h1>Need my contact? Find me physically!</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>And this talks about me! Jealous?</h1>")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})