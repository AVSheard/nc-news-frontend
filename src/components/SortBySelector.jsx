/** @format */

import React from "react";

class SortBySelector extends React.Component {
	state = { selectedOption: null };

	handleChange = (event) => {
		this.setState({ selectedOption: event.target.value });
		this.props.getSortedArticles(event.target.value, this.props.topic);
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

export default SortBySelector;
