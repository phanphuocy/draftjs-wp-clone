import React, { useContext } from "react";

// Import custom components
import Header from "../components/Header/Header";
import PreviewHeader from "../components/Preview/PreviewHeader/PreviewHeader";
import FeedList from "../components/Preview/FeedList/FeedList";
import PreviewFooter from "../components/Preview/PreviewFooter/PreviewFooter";

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
      <PreviewFooter />
    </React.Fragment>
  );
};

export default Preview;
