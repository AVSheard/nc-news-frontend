/** @format */

import React, { Component } from "react";
import axios from "axios";
import NewComment from "./NewComment";
import GenerateComments from "./GenerateComments";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";

export default observer(
	class Comments extends Component {
		state = { comments: [] };

		retrieveComments = (id) => {
			axios
				.get(
					`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`
				)
				.then((res) => {
					this.setState({ comments: res.data.comments });
				});
		};

		uploadComment = (id, comment) => {
			if (comment) {
				axios
					.post(
						`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`,
						{
							username: userInfo.user,
							body: comment,
						}
					)
					.then((res) => {
						this.setState((currentState) => {
							return {
								comments: [res.data.comment, ...currentState.comments],
							};
						});
					});
			}
		};

		render() {
			const { id } = this.props;
			const { comments } = this.state;
			return (
				<>
					<NewComment
						id={id}
						comments={comments}
						uploadComment={this.uploadComment}
					/>
					<GenerateComments
						id={id}
						comments={comments}
						retrieveComments={this.retrieveComments}
					/>
				</>
			);
		}
	}
);
