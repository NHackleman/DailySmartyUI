import { SET_RECENT_POSTS } from "../actions/types";
import recentPosts from "../components/recent-posts";

const INIT_STATE = {
	posts: [],
	recentPosts: [],
};

export default function (state = INIT_STATE, action) {
	switch (action.type) {
		case SET_RECENT_POSTS:
			const recentPosts = action.payload;
			return { ...state, recentPosts };

		default:
			return state;
	}
}
