/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default class TopicsFilter extends Component {
	state = { topics: {}, loading: true };

	retrieveTopics = () => {
		axios
			.get("https://nc-news-anthony.herokuapp.com/api/topics")
			.then((res) => {
				this.setState({ topics: res.data.topics, loading: false });
			});
	};

	componentDidMount() {
		this.retrieveTopics();
	}

	render() {
		if (this.state.loading) {
			return <h2>loading...</h2>;
		} else {
			return (
				<label>
					Choose Topic:
					{this.state.topics.map((topic) => {
						return (
							<>
								{" "}
								<Link to={`/${topic.slug}`} key={topic.slug}>
									{topic.slug}
								</Link>
							</>
						);
					})}
				</label>
			);
		}
	}
}
