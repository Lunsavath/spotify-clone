export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDjiB-g2lf_8iDa-CF5EBvGJzMaR9eX15UgS4H0kaL91Bndz1UTEVS-wnAfgqrLsS0EJswvf1oozsfkw-vQJ5xh9I_rgjarVbGojBwTZR0JVOXSTZ8XS-xiHrxUIC3ge5COniCj6FuG4aFskg8rBpqimf6uuLk",
};

const reducer = (state, action) => {
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
    default:
      return state;
  }
};

export default reducer;
