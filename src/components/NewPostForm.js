import React from "react";
import { Timeago } from "./Timeago";

const NewPostForm = ( {post} ) => {
  return (
    <article className="mb-4">
      <div className="card border-secondary" >
        <div className="card-body">
          <h4 className="card-title mb-4">{post.title}</h4>
          <div className="d-flex gap-2 mb-2 align-items-center">
          <h5 className="card-subtitle text-muted ">{post.userId}</h5>
          <Timeago time={post.date} />
          </div>
          <p className="card-text mb-4">
            {post.body.substring(0, 200)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewPostForm