import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return <div id={this.props.id}>{this.props.todo}</div>;
	}
}

export default Todo;
