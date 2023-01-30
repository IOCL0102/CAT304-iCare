require('dotenv').config(); // import .env variables into process.env

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const hospitalRoutes = require('./routes/hospitals');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const requestRoutes = require('./routes/requests');
const appointmentRoutes = require('./routes/appointments');
const notificationRoutes = require('./routes/notifications');
const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/profile')
const treatmentRoutes = require('./routes/treatment')
const requireAuth = require('./middleware/requireAuth')

// express app
const app = express();

// middleware
app.use(express.json()); // allows us to parse json data and access through req.body
app.use((req,res,next) => {
    console.log(req.url, req.method);
    next();
}) // log all requests on the console (server side)
// enable CORS in backend -server.js
app.use(cors({
    origin: 'http://localhost:3000'
}));
  

// routes
// all routes will be prefixed with their respective collection such as /api/hospitals
app.use('/api/user', userRoutes)
// need Auth token to do GET/POST/PATCH/DELETE
app.use('/api/profile', requireAuth, profileRoutes); 
app.use('/api/hospitals', requireAuth, hospitalRoutes); 
app.use('/api/doctors', requireAuth, doctorRoutes);
app.use('/api/patients', requireAuth, patientRoutes);
app.use('/api/requests', requireAuth, requestRoutes);
app.use('/api/appointments', requireAuth, appointmentRoutes);
app.use('/api/notifications', requireAuth, notificationRoutes);
app.use('/api/treatments', requireAuth, treatmentRoutes);

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


