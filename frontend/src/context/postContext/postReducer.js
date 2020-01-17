import { ADD_POST, DELETE_POST, UPDATE_POST, FILTER_POST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      if (action.payload.status === "trashed") {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload.id)
        };
      } else {
        let clone = { ...action.payload };
        clone.status = "trashed";
        return {
          ...state,
          posts: state.posts.map(post =>
            post.id !== action.payload.id ? post : clone
          )
        };
      }
    default:
      return {
        ...state
      };
  }
};
