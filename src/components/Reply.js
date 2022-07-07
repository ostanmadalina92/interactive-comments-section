import React from "react";
const data = require("../data.json");


function Reply () {
    return (
      <div className="reply">
        <div className="comment-reply">
          <img src={data.comments[1].replies[1].user.image.png} />
          <textarea placeholder="Add a comment..."></textarea>
          <button>Send</button>
        </div>
      </div>
    );
}

export default Reply;