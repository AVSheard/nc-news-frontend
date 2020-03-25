/** @format */

import React, { Component } from "react";

export default class Login extends Component {
	state = { username: "" };

	handleChange = (event) => {
		this.setState({ username: event.target.value });
	};

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Enter Username:
					<input
						type="text"
						value={this.state.username}
						onChange={this.handleChange}></input>
				</label>
				<input type="submit" value="Submit"></input>
			</form>
		);
	}
}
