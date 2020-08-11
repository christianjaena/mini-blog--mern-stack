const fetchBlogs = async () => {
	const url = 'http://localhost:5000/blogs';
	const startFetch = await fetch(url);
	const data = await startFetch.json();
	data.map(blog => {
		const { _id, title, snippet, body } = blog;
		document.getElementById('root').innerHTML += `<div>
				<h1>${title}</h1>
				<h2>${snippet}</h2>
				<p>${body}</p>
				<button class="delete" data-id=${_id}>Delete</button>
			</div>`;
	});

	const deleteButton = document.querySelectorAll('button.delete');
	deleteButton.forEach(item => {
		item.addEventListener('click', e => {
			fetch(`http://localhost:5000/blogs/delete/${item.dataset.id}`, {
				method: 'DELETE',
			})
				.then(res => location.reload())
				.catch(err => console.log(err));
		});
	});
};

fetchBlogs();
