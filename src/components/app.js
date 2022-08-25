import React, { Component } from "react";
import Logo from "./logo.js";
import Searchbar from "./searchbar.js";
import RecentPosts from "./recent-posts.js";

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Logo />
					<Searchbar />
					<RecentPosts />
				</div>
			</div>
		);
	}
}
