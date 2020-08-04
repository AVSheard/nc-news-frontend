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
					<h3>Comments:</h3>
					{userInfo.user && (
						<form onSubmit={this.handleSubmit}>
							<label>
								<textarea
									className="commentInput"
									type="text"
									value={this.state.comment}
									onChange={this.handleChange}
									placeholder={"Write a comment..."}></textarea>
							</label>
							<input type="submit" value="Submit"></input>
						</form>
					)}
				</>
			);
		}
	}
);
