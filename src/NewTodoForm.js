import React, { Component } from 'react';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ todo: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({ todo: '' });
	}

	render() {
		return (
			<form type="submit" onSubmit={this.handleSubmit}>
				<label htmlFor="todo" />
				<input id="todo" name="todo" value={this.state.todo} type="text" onChange={this.handleChange} />
				<button>Create Todo!</button>
			</form>
		);
	}
}

export default NewTodoForm;
