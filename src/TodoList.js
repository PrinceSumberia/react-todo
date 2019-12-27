import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: uuid(), todo: 'Hello World' },
				{ id: uuid(), todo: 'Hello World Again' },
				{ id: uuid(), todo: 'Hello World One More Time' }
			]
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
	}

	addTodo(todo) {
		let newTodo = { id: uuid(), todo };
		this.setState((state) => ({
			todos: [ ...state.todos, newTodo ],
			isEditing: false
		}));
	}

	deleteTodo(id) {
		let filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: filteredTodos });
	}

	updateTodo(id) {
		this.setState({ isEditing: true });
	}

	render() {
		return (
			<div>
				<NewTodoForm addTodo={this.addTodo} />
				{this.state.todos.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						todo={todo.todo}
						deleteTodo={this.deleteTodo}
						updateTodo={this.updateTodo}
					/>
				))}
			</div>
		);
	}
}

export default TodoList;
