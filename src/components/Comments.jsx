/** @format */

import React, { Component } from "react";
import NewComment from "./NewComment";
import GenerateComments from "./GenerateComments";

export default class Comments extends Component {
	render() {
		const { id } = this.props;
		return (
			<>
				<NewComment id={id} />
				<GenerateComments id={id} />
			</>
		);
	}
}
