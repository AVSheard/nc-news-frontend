/** @format */

import React, { Component } from "react";
import axios from "axios";
import TopicsFilter from "./TopicsFilter";
import generateList from "./generateList";
import SortBy from "./SortBy";

export default class Home extends Component {
	state = { articles: [], loading: true };

	retriveArticles = () => {
		axios
			.get("https://nc-news-anthony.herokuapp.com/api/articles")
			.then((res) => {
				this.setState({ articles: res.data.articles, loading: false });
			});
	};

	componentDidMount() {
		this.retriveArticles();
	}

	render() {
		if (this.state.loading) {
			return <h2>loading...</h2>;
		} else {
			return (
				<div>
					<h1>Home</h1>
					<TopicsFilter />
					<SortBy />
					{generateList(this.state.articles)}
				</div>
			);
		}
	}
}
