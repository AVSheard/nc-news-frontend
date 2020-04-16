/** @format */

import React, { Component } from "react";
import axios from "axios";
import TopicsFilter from "./TopicsFilter";
import GenerateList from "./GenerateList";
import SortBy from "./SortBy";

export default class Home extends Component {
	state = { articles: [], loading: true };

	retriveArticles = (topic) => {
		if (topic) {
			axios
				.get(
					`https://nc-news-anthony.herokuapp.com/api/articles?topic=${topic}`
				)
				.then((res) => {
					this.setState({ articles: res.data.articles, loading: false });
				});
		} else {
			axios
				.get("https://nc-news-anthony.herokuapp.com/api/articles")
				.then((res) => {
					this.setState({ articles: res.data.articles, loading: false });
				});
		}
	};

	getSortedArticles = (key, topic) => {
		if (topic) {
			return axios
				.get(
					`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}&topic=${topic}`
				)
				.then((res) => {
					this.setState({ articles: res.data.articles });
				});
		} else {
			return axios
				.get(
					`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}`
				)
				.then((res) => {
					this.setState({ articles: res.data.articles });
				});
		}
	};

	componentDidMount() {
		this.retriveArticles(this.props.topic);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.topic !== this.props.topic) {
			this.retriveArticles(this.props.topic);
		}
	}

	render() {
		if (this.state.loading) {
			return <h2>loading articles...</h2>;
		} else {
			return (
				<div>
					<h1>Home</h1>
					<TopicsFilter />
					<SortBy
						getSortedArticles={this.getSortedArticles}
						topic={this.props.topic}
					/>
					<GenerateList articles={this.state.articles} />
				</div>
			);
		}
	}
}
