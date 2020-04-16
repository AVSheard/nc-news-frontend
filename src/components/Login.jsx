/** @format */

import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";
import { userInfo } from "../stores/userInfo";
import { observer } from "mobx-react";

export default observer(
	class Login extends Component {
		state = { username: "jessjelly", open: false };

		validateUser = (username) => {
			axios
				.get(`https://nc-news-anthony.herokuapp.com/api/users/${username}`)
				.then((res) => {
					userInfo.user = res.data.user.username;
					this.setState({ username: "", open: true });
				})
				.catch(() => {
					userInfo.user = null;
					this.setState({ open: true });
				});
		};

		handleChange = (event) => {
			this.setState({ username: event.target.value });
		};

		handleSubmit = (event) => {
			event.preventDefault();
			this.validateUser(this.state.username);
		};

		closePopUp = () => {
			this.setState({ open: false });
		};

		render() {
			return (
				<>
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
					<Modal className="popup" ariaHideApp={false} isOpen={this.state.open}>
						{userInfo.user ? (
							<p>You have been sucsesfully logged in</p>
						) : (
							<p>Invalid username please try again</p>
						)}
						<button onClick={this.closePopUp}>OK</button>
					</Modal>
				</>
			);
		}
	}
);
