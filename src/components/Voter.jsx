/** @format */

import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";

export default observer(
	class Voter extends Component {
		state = { votes: 0, alreadyVoted: false };

		componentDidMount() {
			this.setState({ votes: this.props.votes });
		}

		handleVote = (voteChange) => {
			if (!this.state.alreadyVoted) {
				axios.patch(
					`https://nc-news-anthony.herokuapp.com/api/${this.props.url}/${this.props.id}`,
					{ inc_votes: voteChange }
				);
				this.setState((currentState) => {
					return { votes: currentState.votes + voteChange, alreadyVoted: true };
				});
			}
		};

		render() {
			return (
				<>
					<h3>Votes: {this.state.votes}</h3>
					{userInfo.user && this.props.author !== userInfo.user && (
						<>
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
					)}
				</>
			);
		}
	}
);
