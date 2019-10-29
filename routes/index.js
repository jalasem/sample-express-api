const router = require('express').Router();

// import routes
const userRoutes = require('./user.route');

const { serverResponse } = require('../utils/helpers');

// use routes
router.use('/user', userRoutes);

router.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the beginning of nothingness 👨🏽‍💻🚀');
});

module.exports = router;
