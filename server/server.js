const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes')

// * DB CONNECTION
const dbURI =
	'mongodb+srv://christianjaena:christianjaenaadmin@node.bjqzv.mongodb.net/nodecrashcourse?retryWrites=true&w=majority';

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => {
		console.log('DB connected');

		app.listen(PORT, err => {
			return err
				? console.log(err)
				: console.log(`Server running on port ${PORT}`);
		});
	})
	.catch(err => console.log('Some shit happened'));

// * MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// * ROUTES
app.use('/blogs', blogRoutes)