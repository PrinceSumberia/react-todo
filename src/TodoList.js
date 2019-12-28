import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}

	addTodo(todo) {
		this.setState((state) => ({
			todos: [ ...state.todos, todo ]
		}));
	}

	deleteTodo(id) {
		let filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: filteredTodos });
	}

	updateTodo(id, updateTodo) {
		const updatedTodo = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, todo: updateTodo };
			}
			return todo;
		});
		this.setState({ todos: updatedTodo });
	}

	toggleCompletion(id) {
		const updatedTodo = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodo });
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				todo={todo.todo}
				completed={todo.completed}
				deleteTodo={this.deleteTodo}
				updateTodo={this.updateTodo}
				toggleTodo={this.toggleCompletion}
			/>
		));
		return (
			<div>
				<h1>Todo List!</h1>
				<NewTodoForm addTodo={this.addTodo} />
				<ul>{todos}</ul>
			</div>
		);
	}
}

export default TodoList;
