/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
	state = { articles: [] };

	retriveArticles = () => {
		axios
			.get("https://nc-news-anthony.herokuapp.com/api/articles")
			.then((res) => {
				console.log(res.data.articles);
				this.setState({ articles: res.data.articles });
			});
	};

	generateList = () => {
		return (
			<ul>
				{this.state.articles.map((article) => {
					return (
						<li
							key={
								article.article_id
							}>{`${article.title} by ${article.author}`}</li>
					);
				})}
			</ul>
		);
	};

	componentDidMount() {
		this.retriveArticles();
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				{this.generateList()}
			</div>
		);
	}
}
