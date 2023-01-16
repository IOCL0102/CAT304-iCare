require('dotenv').config(); // import .env variables into process.env

const express = require('express');
const mongoose = require('mongoose');
const hospitalRoutes = require('./routes/hospitals');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const requestRoutes = require('./routes/requests');
const appointmentRoutes = require('./routes/appointments');
const notificationRoutes = require('./routes/notifications');

// express app
const app = express();

// middleware
app.use(express.json()); // allows us to parse json data and access through req.body
app.use((req,res,next) => {
    console.log(req.url, req.method);
    next();
}) // log all requests on the console (server side)

// routes
// all routes will be prefixed with their respective collection such as /api/hospitals
app.use('/api/hospitals', hospitalRoutes); 
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/notifications', notificationRoutes);

// connect to mongodb
mongoose.set('strictQuery', true); // to avoid deprecation warning (https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose.connect(process.env.MONGOATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        // listen for requests (only happen after connected to DB)
        app.listen(process.env.PORT, () => {
            console.log('Succesfully connect to DB & now listening on port', process.env.PORT);
        });
    })
    .catch(err => console.log(err));


