/** @format */

import React from "react";

const generateList = (articles) => {
	return (
		<ul>
			{articles.map((article) => {
				return (
					<li
						key={
							article.article_id
						}>{`${article.title} by ${article.author}`}</li>
				);
			})}
		</ul>
	);
};

export default generateList;
