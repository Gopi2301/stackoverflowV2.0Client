import React from "react";
import "./RightSideBar.css";
import Widget from "../Widget";
import WidgetTags from "../WidgetTags";

const RightSideBar = () => {
  return (
    <div>
      <aside className="right-sidebar">
        <Widget />
        <WidgetTags />
      </aside>
    </div>
  );
};

export default RightSideBar;
