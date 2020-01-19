import React, { useContext } from "react";

// Import custom components
import Header from "../components/Header/Header";
import PreviewHeader from "../components/Preview/PreviewHeader/PreviewHeader";
import FeedList from "../components/Preview/FeedList/FeedList";

// Import context
import PostContext from "../context/postContext/postContext";

const Preview = () => {
  //
  const postContext = useContext(PostContext);

  //
  const { posts } = postContext;

  return (
    <React.Fragment>
      <Header />
      <PreviewHeader />
      <FeedList posts={posts} />
    </React.Fragment>
  );
};

export default Preview;
