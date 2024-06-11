import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  host: 'localhost',
  database: 'secrets',
  user: 'postgres',
  password: 'admin',
  port: 5432
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  //Add the email and password to the database:
  try {
    //Check if user exists
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      await db.query("INSERT INTO users (email, password) values ($1, $2) RETURNING *", [email, password]); 
      res.redirect("/");
    }
  } catch(err) {
    console.log(err);
  }

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  //check if the email exists in the database and whether the password of the submitted email is equal to the one submitted.
  try {
    const result = await db.query("SELECT * FROM users where email = $1", [email]);
    console.log(result.rows.length);
    if (result.rows.length < 1) {
      res.send("Username does not exist. Try again!")
    } else {
      const pass = result.rows[0].password;
      if (pass === password) {
        res.render("secrets.ejs");
      } else {
        console.log("Password does not match!")
      }
    }
  } catch(err){
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
