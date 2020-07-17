/** @format */

import React, { Component } from "react";
import axios from "axios";
import Voter from "./Voter";
import Comments from "./Comments";

export default class Article extends Component {
	state = { article: {}, loading: true, msg: "", status: 200 };

	handleError = (err) => {
		this.setState({
			msg: err.response.data.msg,
			status: err.response.data.status,
			loading: false,
		});
	};

	retrieveArticle = (id) => {
		axios
			.get(`https://nc-news-anthony.herokuapp.com/api/articles/${id}`)
			.then((res) => {
				this.setState({ article: res.data.article, loading: false });
			})
			.catch((err) => {
				this.handleError(err);
			});
	};

	componentDidMount() {
		this.retrieveArticle(this.props.id);
	}

	render() {
		if (this.state.loading) {
			return <h2>loading article...</h2>;
		} else if (this.state.msg) {
			return (
				<>
					<h1>{this.state.status}</h1>
					<h2>{this.state.msg}</h2>
				</>
			);
		} else {
			const { article } = this.state;
			return (
				<div className="article">
					<h1>
						{article.title} by {article.author}
					</h1>
					<h2>{article.body}</h2>
					<Voter
						votes={article.votes}
						id={article.article_id}
						url={"articles"}
						author={article.author}
					/>
					<Comments id={article.article_id} />
				</div>
			);
		}
	}
}
