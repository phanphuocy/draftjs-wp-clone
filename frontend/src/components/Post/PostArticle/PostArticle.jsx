import React from "react";
import "./PostArticle.scss";

import draftToHtml from "draftjs-to-html";

import { stateToHTML } from "draft-js-export-html";

import DateString from "../../Preview/FeedList/DateString/DateString";

const PostArticle = ({ post }) => {
  //
  const { title, dateUpdated, content } = post;
  //
  let markup = <p>Nothing to show</p>;
  let markupII;
  if (content) {
    markup = draftToHtml(JSON.parse(content));
    // markupII = stateToHTML(JSON.parse(content));
  }
  console.log("markup", markup);
  console.log("markupII", markupII);
  //
  return (
    <article>
      <section className="title-section">
        <div>
          <h1>{title}</h1>
          <DateString dateUpdated={dateUpdated} />
        </div>
      </section>
      <section className="content-section">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: markup }}
        ></div>
      </section>
    </article>
  );
};

export default PostArticle;
