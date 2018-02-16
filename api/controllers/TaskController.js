import Task from '../models/Task';

export default class TaskController {
	static basePath = '/tasks';
	static idPath = `${TaskController.basePath}/:id`;

	getAll = (req, res) => {
		Task.find({}, (error, task) => this.send(req, res, error, task));
	}

	get = (req, res) => {
		Task.findById(req.params.id, (error, task) => this.send(req, res, error, task));
	}

	create = (req, res) => {
		Task.create(req.body, (error, task) => this.send(req, res, error, task));
	}

	update = (req, res) => {
		Task.findByIdAndUpdate(req.params.id, req.body, { new: true },
			(error, task) => this.send(req, res, error, task));
	}

	remove = (req, res) => {
		Task.findByIdAndRemove(req.params.id, (error, task) => this.send(req, res, error, task));
	}

	send(req, res, error, task) {
		if (error) {
			res.send(error);
			return;
		}

		res.json(task);
	}
}