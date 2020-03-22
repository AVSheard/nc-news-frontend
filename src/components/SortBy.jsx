/** @format */

import React from "react";
import axios from "axios";

class SortBy extends React.Component {
	state = { selectedOption: null };

	getSortedArticles = (key) => {
		return axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}`)
			.then((res) => {
				console.log(res.data.articles);
			});
	};

	handleChange = (event) => {
		this.setState({ selectedOption: event.target.value });
		this.getSortedArticles(event.target.value);
	};

	render() {
		return (
			<select onChange={this.handleChange}>
				<option default hidden>
					Select Sort By:
				</option>
				<option value={"created_at"}>Date created</option>
				<option value={"comment_count"}>Comment count</option>
				<option value={"votes"}>Votes</option>
			</select>
		);
	}
}

export default SortBy;
