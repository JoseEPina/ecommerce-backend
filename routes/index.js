const router = require('express').Router(); // imports Router
const apiRoutes = require('./api'); // import all routes under '/api'

// middleware
// adds '/api' to apiRoutes
router.use('/api', apiRoutes);

// catches undefined routes
router.use((req, res) => {
   res.send('<h1>Wrong Route!</h1>');
});

module.exports = router; // exports router
