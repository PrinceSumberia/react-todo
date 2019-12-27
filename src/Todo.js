import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { id: this.props.id, todo: this.props.todo };
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete() {
		this.props.deleteTodo(this.state.id);
	}

	handleUpdate() {
		this.props.updateTodo(this.state.id);
	}

	render() {
		return (
			<div id={this.state.id}>
				{this.state.todo} <button onClick={this.handleDelete}>X</button>{' '}
				<button onClick={this.handleUpdate}>Edit</button>
			</div>
		);
	}
}

export default Todo;
