const Blog = require('../models/blogModel');

const get_blogs = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
};

const add_blog = (req, res) => {
	const blog = new Blog(req.body);
	blog
		.save()
		.then(result => {
			res.status(404).json(result);
		})
		.catch(err => console.log(err));
};

const delete_blog = (req, res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
		.then(result => res.json('deleted'))
		.catch(err => console.log(err));
};

module.exports = {
	get_blogs,
	add_blog,
	delete_blog,
};
