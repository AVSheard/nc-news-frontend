import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { userInfo } from "../stores/userInfo";
import Modal from "react-modal";
import Voter from "./Voter";

export default observer(
	class CurrentComments extends Component {
		state = { open: false, chosenComment: null };

		closePopUp = () => {
			this.setState({ open: false });
		};

		componentDidMount = () => {
			this.props.retrieveComments(this.props.id);
		};

		handleClick = (event) => {
			this.closePopUp();
			axios
				.delete(
					`https://nc-news-anthony.herokuapp.com/api/comments/${this.state.chosenComment}`
				)
				.then((res) => {
					this.props.retrieveComments(this.props.id);
				});
		};

		openPopUp = (event) => {
			this.setState({ open: true, chosenComment: event.target.value });
		};

		render() {
			return (
				<>
					<ul>
						{this.props.comments.map((comment) => {
							return (
								<div key={comment.comment_id} className="comment">
									<h3>{comment.author}:</h3>
									<h3>{comment.body}</h3>
									<Voter
										votes={comment.votes}
										id={comment.comment_id}
										url={"comments"}
										author={comment.author}
									/>
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
