import React from "react";

const data = require("../data.json");

function Comment() {
  return (
    <div className="comments-list">
      <div className="comment">
        <div className="plus-minus">
          <button>+</button>
          <p className="nr">{data.comments[0].score}</p>
          <button>-</button>
        </div>
        <div className="text-area">
          <div className="user-area">
            <div className="user">
              <img src={data.comments[0].user.image.png} />
              <p className="username">{data.comments[0].user.username}</p>
              <p className="createdAt">{data.comments[0].createdAt}</p>
            </div>
            <div className="reply-button">
              <img src="/images/icon-reply.svg" />
              <p className="reply">Reply</p>
            </div>
          </div>
          <div className="text">{data.comments[0].content}</div>
        </div>
      </div>

      <div className="comment">
        <div className="plus-minus">
          <button>+</button>
          <p className="nr">{data.comments[1].score}</p>
          <button>-</button>
        </div>
        <div className="text-area">
          <div className="user-area">
            <div className="user">
              <img src={data.comments[1].user.image.png} />
              <p className="username">{data.comments[1].user.username}</p>
              <p className="createdAt">{data.comments[1].createdAt}</p>
            </div>
            <div className="reply-button">
              <img src="/images/icon-reply.svg" />
              <p className="reply">Reply</p>
            </div>
          </div>
          <div className="text">{data.comments[1].content}</div>
        </div>
      </div>

      <div className="comment-conversation">
        <div className="line-break">
          <hr width="1" size="300"></hr>
        </div>

        <div className="conversation">
          <div className="comment">
            <div className="plus-minus">
              <button>+</button>
              <p className="nr">{data.comments[1].replies[0].score}</p>
              <button>-</button>
            </div>
            <div className="text-area">
              <div className="user-area">
                <div className="user">
                  <img src={data.comments[1].replies[0].user.image.png} />
                  <p className="username">
                    {data.comments[1].replies[0].user.username}
                  </p>
                  <p className="createdAt">
                    {data.comments[1].replies[0].createdAt}
                  </p>
                </div>
                <div className="reply-button">
                  <img src="/images/icon-reply.svg" />
                  <p className="reply">Reply</p>
                </div>
              </div>
              <div className="text">{data.comments[1].replies[0].content}</div>
            </div>
          </div>

          <div className="comment">
            <div className="plus-minus">
              <button>+</button>
              <p className="nr">{data.comments[1].replies[1].score}</p>
              <button>-</button>
            </div>
            <div className="text-area">
              <div className="user-area">
                <div className="user">
                  <img src={data.comments[1].replies[1].user.image.png} />
                  <p className="username">
                    {data.comments[1].replies[1].user.username}
                  </p>
                  <button className="you">you</button>
                  <p className="createdAt">
                    {data.comments[1].replies[1].createdAt}
                  </p>
                </div>
                <div className="modify-comment">
                  <div className="delete">
                    <img src="/images/icon-delete.svg" />
                    <p className="reply">Delete</p>
                  </div>
                  <div className="edit">
                    <img src="/images/icon-edit.svg" />
                    <p className="reply"> Edit</p>
                  </div>
                </div>
              </div>
              <div className="text">{data.comments[1].replies[1].content}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="comment-reply">
        <img src={data.comments[1].replies[1].user.image.png} />
        <textarea placeholder="Add a comment..."></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Comment;
