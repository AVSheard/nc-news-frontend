/** @format */

import React from "react";
import { Link } from "@reach/router";

const GenerateList = (props) => {
	return (
		<ul>
			{props.articles.map((article) => {
				return (
					<li key={article.article_id} className="articleLink">
						<Link to={`../article/${article.article_id}`}>{article.title}</Link>{" "}
						by {article.author}
						<h4>
							Votes: {article.votes} Comments: {article.comment_count}
						</h4>
					</li>
				);
			})}
		</ul>
	);
};

export default GenerateList;
