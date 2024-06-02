import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin",
  port: 5432,
})

db.connect()

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req,res) => {
  const country = req.body.country;
  
  // Get the country code of the submitted country:
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [country.toLowerCase()]
    );

    const data = result.rows[0];
    const country_code = data.country_code;
    console.log(data);
    //Insert the country code to the visited countries table:
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) values ($1)", 
        [country_code]
      );
      //Redirect to the get method to show the countries
      res.redirect("/");
    } catch(err) {
      console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again."
      });
    }
  } catch(err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again."
    });
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
