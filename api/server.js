import express from 'express';
import mongoose from 'mongoose';
import TodoController from './controllers/TodoController';

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://localhost/todo')

const todo = new TodoController();

app.route(TodoController.basePath)
	.get(todo.getAll)
	.post(todo.create);

app.route(TodoController.idPath)
	.get(todo.get)
	.put(todo.update)
	.delete(todo.remove);

app.listen(port);

console.log(`API server started at port: ${port}`);