import React, { useReducer } from "react";
// import uuid from "uuid";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
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

const PostState = props => {
  const initialState = {
    posts: [],
    editing: {
      isNew: true,
      id: "",
      title: "",
      content: "",
      status: ""
    }
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  //
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Get all posts
  const getPosts = async post => {
    try {
      const res = await axios.get("/api/posts");
      console.log(res);
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Add post
  const createNewPost = async post => {
    //
    try {
      const res = await axios.post("/api/posts", post, config);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete post
  const deleteSelectedPost = async post => {
    try {
      // Check for post.status
      if (post.status !== "trashed") {
        post.status = "trashed";
        const res = await axios.put(`/api/posts/${post._id}`, post, config);
        dispatch({ type: CHANGE_TO_TRASH, payload: res.data });
      } else {
        const res = await axios.delete(`/api/posts/${post._id}`);
        dispatch({ type: DELETE_POST, payload: res.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Update post
  const editSelectedPost = async post => {
    console.log("Post", post._id, " to be edited");
    try {
      const res = await axios.put(`/api/posts/${post._id}`, post, config);
      dispatch({ type: UPDATE_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Change post status to draft
  const draftSelectedPost = async post => {
    try {
      // Check for post.status
      if (post.status !== "draft") {
        post.status = "draft";
        const res = await axios.put(`/api/posts/${post._id}`, post, config);
        dispatch({ type: CHANGE_TO_DRAFT, payload: res.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // BELOW IS RELATING TO EDITING POST
  const createEmptyEditing = () => {
    console.log("Create new editing");
    dispatch({ type: CREATE_EMPTY_EDITING });
  };

  const setExistedEditing = post => {
    console.log("Set a existed post to editing");
    dispatch({ type: SET_EXISTED_EDITING, payload: post });
  };

  const updateEditing = post => {
    console.log("Updating currently editing");
    console.log("new state", post);
    dispatch({ type: UPDATE_EDITING, payload: post });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        ///
        createNewPost,
        deleteSelectedPost,
        editSelectedPost,
        draftSelectedPost,
        getPosts,
        ///
        createEmptyEditing,
        setExistedEditing,
        updateEditing,
        editing: state.editing
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
