import React, { Component } from 'react';
import './Todo.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
				<CSSTransition key="editing" timeout={500} classNames="form">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.todo} name="todo" onChange={this.handleChange} />
						<button onClick={this.toggleFrom}>Save</button>
					</form>
				</CSSTransition>
			);
		} else {
			result = (
				<CSSTransition key="normal" timeout={500} classNames="task-text">
					<li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>
						{this.state.todo}
					</li>
				</CSSTransition>
			);
		}
		return (
			<TransitionGroup className={this.props.completed ? 'Todo completed' : 'Todo'}>
				{result}
				<div className="Todo-buttons">
					<button onClick={this.toggleFrom}>
						<i class="fas fa-pen" />
					</button>
					<button onClick={this.handleDelete}>
						<i class="fas fa-trash" />
					</button>
				</div>
			</TransitionGroup>
		);
	}
}

export default Todo;
