import React, { useContext, useEffect } from "react";

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
  console.log(postId);
  //
  const postContext = useContext(PostContext);

  //
  const { posts, getPosts } = postContext;

  //
  useEffect(() => {
    getPosts();
  }, []);

  const currentPost = posts.find(post => post.id === postId);
  console.log(currentPost)

  return (
    <React.Fragment>
      <Header />
      <PreviewHeader />
      {!currentPost && <PostArticle post={currentPost} />}
      <PreviewFooter />
    </React.Fragment>
  );
};

export default PostView;
