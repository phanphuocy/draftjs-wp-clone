import React from "react";
import "./FeedList.scss";

// Import routers
import { Link } from "react-router-dom";

//
import DateString from "./DateString/DateString";

//
import MediumBoxContainer from "../../stateless/MediumBoxContainer/MediumBoxContainer";

const FeedItem = props => {
  const { title, _id, dateCreated } = props.post;

  return (
    <div className="feed-item">
      <Link to={`/preview/${_id}`}>
        <h1 className="item-title">{title}</h1>
      </Link>

      <DateString dateCreated={dateCreated} />
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
          <FeedItem post={post} key={post._id} />
        ))}
      </MediumBoxContainer>
    </div>
  );
};

export default FeedList;
