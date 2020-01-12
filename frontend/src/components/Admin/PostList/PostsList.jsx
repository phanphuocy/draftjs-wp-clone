import React from "react";
import "./PostsList.scss";
import Img from "react-image";

// Import routers
import { Link } from "react-router-dom";

const PostsList = () => {
  return (
    <div className="post-list-container">
      <div className="post-list-title">
        <h3>Posts</h3>
      </div>
      <div className="post-list">
        <div className="post-list-item">
          <div className="post-item-left">
            <h3 className="post-item-title">
              <Link to="/admin/edit-post/p01">
                Cảnh tượng trước mắt chúng tôi thực sự hùng vĩ.
              </Link>
            </h3>
            <span className="post-item-date">Dec-12-2019</span>
          </div>
          <div className="post-item-right">
            <Img
              src={process.env.PUBLIC_URL + "/images/123123123.png"}
              width={100}
            />
          </div>
        </div>
        <div className="post-list-item">
          <div className="post-item-left">
            <h3 className="post-item-title">
              <Link to="/admin/edit-post/p02">
                Bầu trời trong xanh thăm thẳm, không một gợn mây.
              </Link>
            </h3>
            <span className="post-item-date">Dec-12-2019</span>
          </div>
          <div className="post-item-right">
            <Img
              src={process.env.PUBLIC_URL + "/images/456456456.png"}
              width={100}
            />
          </div>
        </div>
        <div className="post-list-item">
          <div className="post-item-left">
            <h3 className="post-item-title">
              <Link to="/admin/edit-post/p03">
                Những con sóng lao mình vào màn đêm xanh thẫm.
              </Link>
            </h3>
            <span className="post-item-date">Dec-12-2019</span>
          </div>
          <div className="post-item-right">
            <Img
              src={process.env.PUBLIC_URL + "/images/789789789.png"}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
