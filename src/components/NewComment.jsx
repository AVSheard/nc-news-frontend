/** @format */

import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";

export default observer(
	class NewComment extends Component {
		state = { comment: "", newComments: [] };

		uploadComment = (id) => {
			axios
				.post(
					`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`,
					{
						username: userInfo.user,
						body: this.state.comment
					}
				)
				.then((res) => {
					this.setState({
						newComments: [res.data.comment, ...this.state.newComments]
					});
				});
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
				<>
					<h3>comments:</h3>
					{userInfo.loggedIn && (
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
					)}

					{this.state.newComments.map((comment) => {
						return (
							<div key={comment.comment_id}>
								<h4>{comment.author}</h4>
								<h4>{comment.body}</h4>
							</div>
						);
					})}
				</>
			);
		}
	}
);
