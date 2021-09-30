export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: "BQAUJOrJ2LaQ0JkQ3qL2effwZrKcD9VDW39AB_dzc7u55gJOZ6…9ovTToNCj7Ovgu5J9lefRUPhXXmjs9U6p3JYTe-rDS5anDwHl"
	token: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly
			};
		default:
			return state;
	}
};

export default reducer;
