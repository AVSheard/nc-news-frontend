/** @format */

import React, { Component } from "react";
import axios from "axios";
import { userInfo } from "../stores/userInfo";
import { observer } from "mobx-react";

export default observer(
	class Login extends Component {
		state = { username: "" };

		validateUser = (username) => {
			axios
				.get(`https://nc-news-anthony.herokuapp.com/api/users/${username}`)
				.then((res) => {
					userInfo.user = res.data.user.username;
					userInfo.loggedIn = true;
				})
				.catch(() => {
					userInfo.user = `The user "${username}" does not exist, please try a different username`;
					userInfo.loggedIn = false;
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
					<h3>{userInfo.user || "You are not logged in"}</h3>
				</form>
			);
		}
	}
);
