/** @format */

import React, { Component } from "react";
import axios from "axios";
import generateComments from "./generateComments";

export default class Article extends Component {
	state = { article: {}, loading: false };

	retriveArticle = (id) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles/${id}`)
			.then((res) => {
				this.setState({ article: res.data.article });
			});
	};

	componentDidMount() {
		this.retriveArticle(this.props.id);
	}

	render() {
		if (this.state.loading) {
			return <h2>loading...</h2>;
		} else {
			const { article } = this.state;
			return (
				<div>
					<h1>Article</h1>
					<h2>
						{article.title} by {article.author}
					</h2>
					<h3>{article.body}</h3>
					{generateComments(this.props.id)}
				</div>
			);
		}
	}
}
