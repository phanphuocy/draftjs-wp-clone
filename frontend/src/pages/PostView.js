import React, { useContext } from "react";

// Import custom components
import Header from "../components/Header/Header";
import PreviewHeader from "../components/Preview/PreviewHeader/PreviewHeader";
import PreviewFooter from "../components/Preview/PreviewFooter/PreviewFooter";
import PostArticle from "../components/Post/PostArticle/PostArticle";

// Import context
import PostContext from "../context/postContext/postContext";
//
import { useParams } from "react-router-dom";

const PostView = () => {
  //
  let { postId } = useParams();
  //
  const postContext = useContext(PostContext);

  //
  const { posts } = postContext;

  const currentPost = posts.find(post => post.id === postId);

  return (
    <React.Fragment>
      <Header />
      <PreviewHeader />
      <PostArticle post={currentPost} />
      <PreviewFooter />
    </React.Fragment>
  );
};

export default PostView;
