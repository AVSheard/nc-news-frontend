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

	render() {
		return (
			<div>
				<h3>comments:</h3>
				{this.state.comments.map((comment) => {
					return (
						<div key={comment.comment_id}>
							<h4>{comment.author}</h4>
							<h4>{comment.body}</h4>
						</div>
					);
				})}
			</div>
		);
	}
}
