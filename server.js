require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');
const passport = require('./services/passport'); // Import the configured passport instance

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Set up sessions with connect-mongo
const MongoStore = connectMongo(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport Configuration
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Enable session support for passport

// Routes (assuming you have these defined in your application)
const paymentRoutes = require('./routes/payment');
const authRoutes = require('./routes/auth');
const roleAuthorization = require('./middleware/roleAuthorization');

// Use your routes
app.use('/auth', authRoutes);
app.use('/payment', roleAuthorization('user'), paymentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
