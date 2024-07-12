import React from "react";

import "./index.css";
import BlogItem from "../BlogItem";

export default function BlogGrid({ blogs, setBlog }) {
  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <>
      <div className="blog-grid-container">
        <div className="item-1">
          {blogs.length > 0 && (
            <BlogItem
              imageOrientation={"top"}
              index={0}
              blog={blogs[0]}
              setBlog={setBlog}
            />
          )}
        </div>

        <div className="right-block">
          {blogs.length > 1 && (
            <div className="item-2">
              <BlogItem
                imageOrientation={"left"}
                index={1}
                blog={blogs[1]}
                setBlog={setBlog}
              />
            </div>
          )}

          {blogs.length > 2 && (
            <div className="item-3">
              <BlogItem index={2} blog={blogs[2]} setBlog={setBlog} />
            </div>
          )}
        </div>
      </div>
      {blogs.length > 3 && (
        <div className="item-4">
          <BlogItem index={3} blog={blogs[3]} setBlog={setBlog} />
        </div>
      )}
    </>
  );
}
