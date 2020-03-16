/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
	state = { articles: [] };

	retriveArticles = () => {
		axios
			.get("https://nc-news-anthony.herokuapp.com/api/articles")
			.then((res) => {
				console.log(res.data);
				this.setState({ students: res.data.students });
			});
	};

	componentDidMount() {
		this.retriveArticles();
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		);
	}
}
