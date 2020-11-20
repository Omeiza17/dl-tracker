// importing server dependencies
const express = require('express');
const expressJwt = require('express-jwt');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('../config.json');

// defining the Express app
const app = express();
// adding Helmet to enhance API's security
app.use(helmet());

// user related controller
const users = require('./controller/user.controller');
const courseWorks = require('./controller/coursework.controller');

// enabling CORS for all requests
app.use(cors());
const secret = config.secret_key;

app.use(expressJwt({secret, algorithms: ['HS256']}).unless({
    path: [
        // public controller that don't require authentication
        '/api/users/authenticate',
        '/api/users/register'
    ]
}));

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.use('/api/users/', users.users);
app.use('/api/courseworks/', courseWorks.coureWorks);

// server port
const PORT = 3030

app.listen(PORT);

console.log(`DL-Tracker Express server running at ${PORT}`);
