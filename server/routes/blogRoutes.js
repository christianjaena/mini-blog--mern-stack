const express = require('express');
const route = express.Router();
const {
	get_blogs,
	add_blog,
	delete_blog,
} = require('../controller/blogController');

route.get('/', get_blogs);

route.post('/add-blog', add_blog);

route.delete('/delete/:id', delete_blog);

module.exports = route;
