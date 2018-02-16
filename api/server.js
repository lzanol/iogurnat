import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TaskController from './controllers/TaskController';

mongoose.connect('mongodb://localhost/todo');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const taskController = new TaskController();

app.route(TaskController.basePath)
	.get(taskController.getAll)
	.post(taskController.create);

app.route(TaskController.idPath)
	.get(taskController.get)
	.put(taskController.update)
	.delete(taskController.remove);

app.listen(port);

console.log(`API server started at port: ${port}`);