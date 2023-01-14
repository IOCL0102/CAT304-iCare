require('dotenv').config(); // import .env variables into process.env

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json()); // allows us to parse json data and access through req.body
app.use((req,res,next) => {
    console.log(req.url, req.method);
    next();
}) // log all requests on the console (server side)

// connect to mongodb
// later add optionals to avoid deprecation warnings
mongoose.connect(process.env.MONGOATLAS_URI)
    .then(() => {
        // listen for requests (only happen after connected to DB)
        app.listen(process.env.PORT, () => {
            console.log('Succesfully connect to DB & now listening on port', process.env.PORT);
        });
    })
    .catch(err => console.log(err));


