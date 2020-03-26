/** @format */

import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";

export default observer(
	class NewComment extends Component {
		state = { comment: "" };

		uploadComment = (id) => {
			axios.post(
				`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`,
				{
					username: userInfo.user,
					body: this.state.comment
				}
			);
		};

		handleChange = (event) => {
			this.setState({ comment: event.target.value });
		};

		handleSubmit = (event) => {
			event.preventDefault();
			this.uploadComment(this.props.id);
		};

		render() {
			return (
				<form onSubmit={this.handleSubmit}>
					<label>
						Add commet:
						<input
							type="text"
							value={this.state.comment}
							onChange={this.handleChange}></input>
					</label>
					<input type="submit" value="Submit"></input>
				</form>
			);
		}
	}
);
