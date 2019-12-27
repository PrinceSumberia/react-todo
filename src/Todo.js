import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div id={this.props.id}>
				{this.props.todo} <button onClick={this.props.deleteTodo}>X</button>
			</div>
		);
	}
}

export default Todo;
