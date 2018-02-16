export default class TodoController {
	static basePath = '/tasks';
	static idPath = `${TodoController.basePath}/:id`;

	getAll(req, res) {
		res.send('ok');
	}

	get(id) {
		
	}

	create() {}
	update(id) {}
	remove() {}
}