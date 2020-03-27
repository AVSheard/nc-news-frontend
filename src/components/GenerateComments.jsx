/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class GenerateComments extends Component {
	state = { comments: [] };

	retriveComments = (id) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`)
			.then((res) => {
				this.setState({ comments: res.data.comments });
			});
	};

	componentDidMount = () => {
		this.retriveComments(this.props.id);
	};

	handleClick = (event) => {
		axios
			.delete(
				`https://nc-news-anthony.herokuapp.com/api/comments/${event.target.value}`
			)
			.then((res) => {
				console.log(res);
			});
	};

	render() {
		return (
			<ul>
				{this.state.comments.map((comment) => {
					return (
						<div key={comment.comment_id}>
							<h4>{comment.author}:</h4>
							<h4>{comment.body}</h4>
							<button onClick={this.handleClick} value={comment.comment_id}>
								Delete Comment
							</button>
						</div>
					);
				})}
			</ul>
		);
	}
}
