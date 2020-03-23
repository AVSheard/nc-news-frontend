/** @format */

import React from "react";
import { Link } from "@reach/router";

const generateList = (articles) => {
	return (
		<ul>
			{articles.map((article) => {
				return (
					<li key={article.article_id}>
						<Link to={`../article/${article.article_id}`}>{article.title}</Link>{" "}
						by {article.author}
					</li>
				);
			})}
		</ul>
	);
};

export default generateList;
