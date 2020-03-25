/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
	state = { username: "" };

	validateUser = (username) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/users/${username}`)
			.then((res) => {
				console.log(res.data.user);
			});
	};

	handleChange = (event) => {
		this.setState({ username: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.validateUser(this.state.username);
	};

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
