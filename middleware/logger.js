const moment = require('moment');


// simple middleware - everytime we make a req, it will run
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};


module.exports = logger;
