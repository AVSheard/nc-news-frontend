/** @format */

import React, { Component } from "react";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";

export default observer(
	class NewComment extends Component {
		state = { comment: "" };

		handleChange = (event) => {
			this.setState({ comment: event.target.value });
		};

		handleSubmit = (event) => {
			event.preventDefault();
			this.props.uploadComment(this.props.id, this.state.comment);
			this.setState({ comment: "" });
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

					{/* {this.state.newComments.map((comment) => {
						return (
							<div key={comment.comment_id}>
								<h4>{comment.author}</h4>
								<h4>{comment.body}</h4>
							</div>
						);
					})} */}
				</>
			);
		}
	}
);
