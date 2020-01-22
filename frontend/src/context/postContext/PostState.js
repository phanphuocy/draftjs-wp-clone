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
  GET_POSTS
} from "../types";

const PostState = props => {
  const initialState = {
    posts: [
      {
        id: "p01",
        title: "Cảnh tượng trước mắt chúng tôi thực sự hùng vĩ.",
        dateCreated: "1579582767",
        dateUpdated: "1579582767000",
        status: "published",
        thumbnailUrl: "/images/123123123.png",
        content:
          '{"blocks":[{"key":"36i9d","text":"This","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
      }
      // {
      //   id: "p02",
      //   title: "Bầu trời trong xanh thăm thẳm, không một gợn mây.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837100),
      //   status: "published",
      //   thumbnailUrl: "/images/456456456.png"
      // },
      // {
      //   id: "p03",
      //   title: "Những con sóng lao mình vào màn đêm xanh thẫm.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897836000),
      //   status: "draft",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p04",
      //   title: "Gờ chắn màu đỏ in bóng tựa viền cánh chim lởm chởm.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897836000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p05",
      //   title: "Khi màn sương tan, con tàu đã rời cảng ba tiếng.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p06",
      //   title: "Màn sương màu bạc tràn ngập khắp boong tàu.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p07",
      //   title: "Mọi thiết bị và dụng cụ đều đang hoạt động.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p08",
      //   title: "Trái đất như hình lưỡi liềm sáng rực bên dưới tàu bay.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "draft",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p09",
      //   title: "Vừa lúc biết điều đó, chúng tôi đã rời khỏi mặt đất.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p10",
      //   title: "Đó chỉ là vấn đề thời gian.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p11",
      //   title: "Lửa tắt, anh dõi theo những vì sao qua cửa sổ.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p12",
      //   title: "Gờ chắn màu đỏ in bóng tựa viền cánh chim lởm chởm.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "draft",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p13",
      //   title: "Màn sương màu bạc tràn ngập khắp boong tàu.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "published",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p14",
      //   title: "Tôi ngắm nhìn cơn bão, quá đẹp nhưng thật hãi hùng.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "draft",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p15",
      //   title: "Hai bản ngã trong con người tôi có chung kỷ niệm.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "trashed",
      //   thumbnailUrl: "/images/789789789.png"
      // },
      // {
      //   id: "p16",
      //   title: "Đêm hôm đó, ngôi sao băng đầu tiên xuất hiện.",
      //   dateCreated: Date(1355897837000),
      //   dateUpdated: Date(1355897837000),
      //   status: "draft",
      //   thumbnailUrl: "/images/789789789.png"
      // }
    ]
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

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
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    //
    try {
      const res = await axios.post("/api/posts", post, config);
      console.log(res);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete post
  const deleteSelectedPost = post => {
    dispatch({ type: DELETE_POST, payload: post });
  };

  // Update post
  const editSelectedPost = post => {
    console.log("Post", post.id, " to be edited");
    dispatch({ type: UPDATE_POST, payload: post });
  };

  // Filter post

  // Change post status to draft
  const draftSelectedPost = post => {
    console.log("Post", post, " to be draft");
    dispatch({ type: CHANGE_TO_DRAFT, payload: post });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        createNewPost,
        deleteSelectedPost,
        editSelectedPost,
        draftSelectedPost,
        getPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
