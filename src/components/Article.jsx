/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Article extends Component {
	state = { article: {} };

	retriveArticle = (id) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles/${id}`)
			.then((res) => {
				this.setState({ article: res.data.article });
			});
	};

	componentDidMount() {
		this.retriveArticle();
	}

	render() {
		return (
			<div>
				<h1>Article</h1>
			</div>
		);
	}
}
