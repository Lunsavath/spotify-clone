export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAu_-dziUSLQMMjSu3EDnnXCFAzhOql6V66zpD3ajmkMn3fUhBqW-2AEBki_22JogPwOgJZsyETT4KSGNpetlz2qZ7daY6fGVD-ERgqBBZvrSjpK9lQFpGbVfwWJ1xIYXJSDlc7P1bIOiDA5nmHO7S40XOmgE0",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
