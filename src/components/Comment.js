import React from "react";

function Comment () {
    return (
      <div className="comments-list">
        <div className="comment">
          <div className="plus-minus">
            <button>+</button>
            <div className="nr">12</div>
            <button>-</button>
          </div>
          <div className="text-area">
            <div className="user"></div>
            <div className="text"></div>
          </div>
        </div>
        <div className="comment-conversation">
          <div className="conversation">
            <div className="comment"></div>
            <div className="comment"></div>
          </div>
        </div>
      </div>
    );
}

export default Comment;