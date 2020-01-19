import React from "react";
import "./FeedList.scss";

//
import DateString from "../DateString/DateString";

//
import MediumBoxContainer from "../../stateless/MediumBoxContainer/MediumBoxContainer";

const FeedItem = props => {
  const { title, dateUpdated } = props.post;

  return (
    <div className="feed-item">
      <h1 className="item-title">{title}</h1>
      <DateString dateUpdated={dateUpdated} />
      <div className="separator"></div>
    </div>
  );
};

const FeedList = props => {
  //
  const { posts } = props;

  //
  const publishedPost = posts.filter(post => post.status === "published");

  return (
    <div className="feed-main">
      <MediumBoxContainer>
        {publishedPost.map(post => (
          <FeedItem post={post} key={post.id} />
        ))}
      </MediumBoxContainer>
    </div>
  );
};

export default FeedList;
