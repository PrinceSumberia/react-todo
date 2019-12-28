import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, id: this.props.id, todo: this.props.todo };
		this.toggleFrom = this.toggleFrom.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	toggleFrom() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleDelete() {
		this.props.deleteTodo(this.state.id);
	}

	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.state.id, this.state.todo);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleToggle() {
		this.props.toggleTodo(this.state.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.todo} name="todo" onChange={this.handleChange} />
						<button onClick={this.toggleFrom}>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div id={this.state.id}>
					<li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>
						{this.state.todo}
					</li>
					<button onClick={this.handleDelete}>X</button>
					<button onClick={this.toggleFrom}>Edit</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
