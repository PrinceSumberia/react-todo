import React, { Component } from 'react';
class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, id: this.props.id, todo: this.props.todo };
		this.handleDelete = this.handleDelete.bind(this);
		this.toggleFrom = this.toggleFrom.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleDelete() {
		this.props.deleteTodo(this.state.id);
	}

	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.state.id, this.state.todo);
	}

	toggleFrom() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
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
					<li>{this.state.todo}</li>
					<button onClick={this.handleDelete}>X</button>
					<button onClick={this.toggleFrom}>Edit</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
