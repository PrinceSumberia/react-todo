import React, { Component } from 'react';
import uuid from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addTodo({ ...this.state, id: uuid(), completed: false });
		this.setState({ todo: '' });
	}

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="todo">New Todo: </label>
				<input id="todo" name="todo" value={this.state.todo} type="text" onChange={this.handleChange} />
				<button>Create Todo!</button>
			</form>
		);
	}
}

export default NewTodoForm;
