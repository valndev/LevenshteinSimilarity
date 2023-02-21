const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.set('json spaces', 2);
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
	console.clear();
	console.log(``);
	console.log(` * Server is running on port: ${app.get('port')}`);
	console.log(` * (Press CTRL + C to quit)`);
	console.log(``);
});
