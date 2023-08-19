const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/config/authdb");

// database connection
db.connect((err) => {
    err ? console.log("db connection failed ...") : console.log("db connection success ..");
});

const routes = require("./app/routes/signup.routes");

app.use(cors({
    origin: 'http://localhost:4200' 
  }));

// bodyparser
app.use(bodyparser.json());

// Routes
app.use("/api", routes);

// server
app.listen(3000, (err) => {
    if (err) 
        throw err;
    
    console.log('server running....');
});
