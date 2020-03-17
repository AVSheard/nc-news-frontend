/** @format */

import axios from "axios";
import React, { Component } from "react";
import TopicsFilter from "./TopicsFilter";
import generateList from "./generateList";

export default class FilteredHome extends Component {
	state = { articles: [] };

	retriveArticles = (topic) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles?topic=${topic}`)
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
				{generateList(this.state.articles)}
			</div>
		);
	}
}
