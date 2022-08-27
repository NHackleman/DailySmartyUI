import React, { Component } from "react";
import Logo from "./logo.js";
import Searchbar from "./searchbar.js";
import RecentPosts from "./recent-posts.js";

import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
	handleSearchBarSubmit(query) {
		this.props.fetchPostsWithQuery(query);
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

export default connect(null, actions)(Home);
