import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Danx";
const yourPassword = "Admin";
const yourAPIKey = "74c73d69-30cb-406e-9c9a-1d295ee8278f";
const yourBearerToken = "d96dd437-283a-46d7-b68c-27000b4b17e4";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

//Using async is a better and simpler approach
app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await  axios.get("https://secrets-api.appbrewery.com/random")
    const result = response.data.secret

    res.render("index.ejs", { content : result })
  } catch(error){
    console.log(error)
    res.status(404).send("Error: ", error.message);
  }
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  axios.get(`${API_URL}all`, {
    auth: {
      username: yourUsername,
      password: yourPassword
    },

    params: {
      Page: "2"
    }
    
  })
  .then(function(response) {
    console.log(response.status)
    const result = JSON.stringify(response.data)

    res.render("index.ejs", { content:result })
  })
  .catch(function(error){
    console.log(error)
    res.status(404).send("Error: ", error.message);
  }) 
})

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`)
    .then(function(response) {
      console.log(response.data)
      const result = JSON.stringify(response.data)
  
      res.render("index.ejs", { content:result })
    })
    .catch(function(error){
      console.log(error)
      res.status(404).send("Error: ", error.message);
    })
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 //The headers value can also be defined then passed in as a constant:
 //const config = { headers: { Authorization: `Bearer ${yourBearerToken}`}}

  axios.get(`${API_URL}secrets/1`, {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    }
  })
  .then(function(response) {
    console.log(response.data)
    const result = JSON.stringify(response.data)

    res.render("index.ejs", { content:result })
  })
  .catch(function(error){
    console.log(error)
    res.status(404).send("Error: ", error.message);
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
