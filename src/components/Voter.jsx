/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Voter extends Component {
	state = { votes: 0 };

	componentDidMount() {
		this.setState({ votes: this.props.votes });
	}

	handleVote = (voteChange) => {
		axios.patch(
			`https://nc-news-anthony.herokuapp.com/api/articles/${this.props.id}`,
			{ inc_votes: voteChange }
		);
		this.setState({ votes: this.state.votes + voteChange });
	};

	render() {
		return (
			<>
				<h3>Votes: {this.state.votes}</h3>
				<button
					onClick={() => {
						this.handleVote(1);
					}}>
					Up Vote
				</button>
				<button
					onClick={() => {
						this.handleVote(-1);
					}}>
					Down Vote
				</button>
			</>
		);
	}
}
