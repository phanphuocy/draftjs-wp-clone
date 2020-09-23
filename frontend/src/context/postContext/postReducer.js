import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_TO_DRAFT,
  CHANGE_TO_TRASH,
  GET_POSTS,
  CREATE_EMPTY_EDITING,
  SET_EXISTED_EDITING,
  UPDATE_EDITING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      if (action.payload.status === "trashed") {
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload._id)
        };
      } else {
        let clone = { ...action.payload };
        clone.status = "trashed";
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id !== action.payload._id ? post : clone
          )
        };
      }
    case UPDATE_POST:
      let clone = { ...action.payload };
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id !== action.payload._id ? post : clone
        )
      };
    case CHANGE_TO_DRAFT:
      if (action.payload.status === "draft") {
        console.log("is draft");
        return {
          ...state
        };
      } else {
        let clone = { ...action.payload };
        clone.status = "draft";
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id !== action.payload._id ? post : clone
          )
        };
      }

    case CHANGE_TO_TRASH:
      if (action.payload.status !== "trashed") {
        let clone = { ...action.payload };
        clone.status = "trashed";
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id !== action.payload._id ? post : clone
          )
        };
      }
      break;

    case CREATE_EMPTY_EDITING:
      return {
        ...state,
        editing: {
          isNew: true,
          id: "",
          title: "",
          content: "",
          status: ""
        }
      };

    case SET_EXISTED_EDITING:
      return {
        ...state,
        editing: {
          ...action.payload,
          isNew: false
        }
      };
    case UPDATE_EDITING:
      return {
        ...state,
        editing: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
