/** @format */

import axios from "axios";
import React, { Component } from "react";
import TopicsFilter from "./TopicsFilter";
import GenerateList from "./GenerateList";
import SortBy from "./SortBy";

export default class FilteredHome extends Component {
	state = { articles: [] };

	retriveArticles = (topic) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles?topic=${topic}`)
			.then((res) => {
				this.setState({ articles: res.data.articles });
			});
	};

	getSortedArticles = (key, topic) => {
		return axios
			.get(
				`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}&topic=${topic}`
			)
			.then((res) => {
				this.setState({ articles: res.data.articles });
			});
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
		return (
			<div>
				<h1>{this.props.topic}</h1>
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
