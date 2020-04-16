/** @format */

import React, { Component } from "react";
import axios from "axios";
import TopicsFilter from "./TopicsFilter";
import GenerateList from "./GenerateList";
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

	getSortedArticles = (key) => {
		return axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}`)
			.then((res) => {
				this.setState({ articles: res.data.articles });
			});
	};

	componentDidMount() {
		this.retriveArticles();
	}

	render() {
		if (this.state.loading) {
			return <h2>loading articles...</h2>;
		} else {
			return (
				<div>
					<h1>Home</h1>
					<TopicsFilter />
					<SortBy getSortedArticles={this.getSortedArticles} />
					<GenerateList articles={this.state.articles} />
				</div>
			);
		}
	}
}
