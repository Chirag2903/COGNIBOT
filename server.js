const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan")
const cors = require("cors");
const bodyParser = require("body-parser");
const connectdatabase = require("./config/database");
const errormiddleware = require("./middlewares/errormiddleware")
const path = require("path")
const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

//Database connection
connectdatabase();

//middleware
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(errormiddleware);


//Include Routes 
const userroutes = require("./routes/userroutes");
const openairoutes = require("./routes/openairoutes");

app.use('/api/v1', userroutes);
app.use('/api/v1', openairoutes);


app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
})

app.listen(process.env.PORT, () => {
    console.log(`Sever is Listening ${process.env.PORT}`)
})