// Import necessary modules
const express = require('express');
const methodOverride = require('method-override');
const apiRoutes = require('./routes/api');
const uiRoutes = require('./routes/ui');
require('dotenv').config();
 

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;
 

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
 

// Set the view engine to EJS
app.set('view engine', 'ejs');
 

// Use the API and UI routes
app.use('/api', apiRoutes);
app.use('/', uiRoutes);
 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});