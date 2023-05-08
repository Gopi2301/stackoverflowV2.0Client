import React from "react";

const WidgetTags = () => {
  const tags = [
    "C",
    "css",
    "html",
    "javaScript",
    "express",
    "firebase",
    "MongoDB",
    "React",
    "MERN",
    "TailWind",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched Tags</h3>
      <div className="widgets-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
