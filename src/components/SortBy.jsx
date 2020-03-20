/** @format */

import React from "react";
import axios from "axios";

class SortBy extends React.Component {
	state = {};

	getSortedArticles = (key) => {
		return axios.get(
			`https://nc-news-anthony.herokuapp.com/api/articles?sort_by=${key}`
		);
	};

	render() {
		return (
			<select>
				<option default hidden>
					Select Sort By:
				</option>
				<option
					onClick={() => {
						this.getSortedArticles("created_at");
					}}>
					Date created
				</option>
				<option>Comment count</option>
				<option>Votes</option>
			</select>
		);
	}
}

export default SortBy;
