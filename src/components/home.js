import React, { Component } from "react";
import Logo from "./logo.js";
import Searchbar from "./searchbar.js";
import RecentPosts from "./recent-posts.js";

export default class Home extends Component {
	handleSearchBarSubmit(query) {
		console.log("trying to handle submit for query", query);
		this.props.history.push("/results");
	}

	render() {
		return (
			<div>
				<div>
					<Logo />
					<Searchbar
						onSubmit={(query) => this.handleSearchBarSubmit(query)}
					/>
					<RecentPosts />
				</div>
			</div>
		);
	}
}
