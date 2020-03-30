/** @format */

import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";
import Modal from "react-modal";

export default observer(
	class GenerateComments extends Component {
		state = { comments: [], open: false, chosenComent: -1 };

		retriveComments = (id) => {
			axios
				.get(
					`https://nc-news-anthony.herokuapp.com/api/articles/${id}/comments`
				)
				.then((res) => {
					this.setState({ comments: res.data.comments });
				});
		};

		closePopUp = () => {
			this.setState({ open: false });
		};

		componentDidMount = () => {
			this.retriveComments(this.props.id);
		};

		handleClick = (event) => {
			this.closePopUp();
			axios
				.delete(
					`https://nc-news-anthony.herokuapp.com/api/comments/${this.state.chosenComent}`
				)
				.then((res) => {
					this.retriveComments(this.props.id);
				});
		};

		openPopUp = (event) => {
			this.setState({ open: true, chosenComent: event.target.value });
		};

		render() {
			return (
				<>
					<ul>
						{this.state.comments.map((comment) => {
							return (
								<div key={comment.comment_id}>
									<h4>{comment.author}:</h4>
									<h4>{comment.body}</h4>
									{userInfo.user === comment.author && (
										<button onClick={this.openPopUp} value={comment.comment_id}>
											Delete Comment
										</button>
									)}
								</div>
							);
						})}
					</ul>
					<Modal className="popup" ariaHideApp={false} isOpen={this.state.open}>
						<p>Are you sure you want to delete this comment?</p>
						<button onClick={this.closePopUp}>Cancel</button>
						<button onClick={this.handleClick}>Delete</button>
					</Modal>
				</>
			);
		}
	}
);
