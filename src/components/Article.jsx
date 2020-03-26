/** @format */

import React, { Component } from "react";
import axios from "axios";
import GenerateComments from "./GenerateComments";
import NewComment from "./NewComment";

export default class Article extends Component {
	state = { article: {}, loading: true };

	retriveArticle = (id) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles/${id}`)
			.then((res) => {
				this.setState({ article: res.data.article, loading: false });
			});
	};

	componentDidMount() {
		this.retriveArticle(this.props.id);
	}

	render() {
		if (this.state.loading) {
			return <h2>loading article...</h2>;
		} else {
			const { article } = this.state;
			return (
				<div>
					<h1>Article</h1>
					<h2>
						{article.title} by {article.author}
					</h2>
					<h3>{article.body}</h3>
					<NewComment id={this.props.id} />
					<GenerateComments id={this.props.id} />
				</div>
			);
		}
	}
}
