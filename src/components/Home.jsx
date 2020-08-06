/** @format */

import React, { Component } from "react";
import axios from "axios";
import TopicsFilter from "./TopicsFilter";
import ArticleList from "./ArticleList";
import SortBySelector from "./SortBySelector";

export default class Home extends Component {
	state = { articles: [], loading: true, msg: "", status: 200 };

	handleError = (err) => {
		this.setState({
			msg: err.response.data.msg,
			status: err.response.data.status,
			loading: false,
		});
	};

	retrieveArticles = (topic, key) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles`, {
				params: { topic: topic, sort_by: key },
			})
			.then((res) => {
				this.setState({ articles: res.data.articles, loading: false });
			})
			.catch((err) => {
				this.handleError(err);
			});
	};

	componentDidMount() {
		this.retrieveArticles(this.props.topic);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.topic !== this.props.topic) {
			this.retrieveArticles(this.props.topic);
		}
	}

	render() {
		if (this.state.loading) {
			return <h2>loading articles...</h2>;
		} else if (this.state.msg) {
			return (
				<>
					<h1>{this.state.status}</h1>
					<h2>{this.state.msg}</h2>
				</>
			);
		} else {
			return (
				<div>
					<h1>{this.props.topic || "Home"}</h1>
					<TopicsFilter />
					<SortBySelector
						retrieveArticles={this.retrieveArticles}
						topic={this.props.topic}
					/>
					<ArticleList articles={this.state.articles} />
				</div>
			);
		}
	}
}
