import React, { useContext } from "react";
import Context from "./context";

export default () => {
  const { state } = useContext(Context);

  // return "";

  const posts =
    state.filteredPosts.length > 0 ? state.filteredPosts : state.posts;

  console.log("count", posts.length);

  return posts.map(post => (
    <div className="col-sm-6 col-md-3 mb-3">
      <div className="card" key={post.id}>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  ));
};
