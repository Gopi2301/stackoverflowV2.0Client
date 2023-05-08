import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import icon from "../../src/assets/smalllogo.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The OverFlow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <ModeEditOutlineIcon width="18" />
          <p>
            Observability is key to the future <br />
            of software (and your DevOps career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <ModeEditOutlineIcon width="18" />
          <p>
            Podcast 374: How Valuable is your <br />
            Screen name?
          </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <ModeCommentIcon width="18" />
          <p>Review queue workflows -Final release...</p>
        </div>
        <div className="right-sidebar-div-2">
          <ModeCommentIcon width="18" />
          <p>
            Please welcome Valued Assocated #958 <br />
            -V2Blast -SpencerG
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={icon} alt="icon" width="18" />
          <p>
            Outdated Answers:accepted is <br />
            unpinned on Stack overFlow
          </p>
        </div>
      </div>
      <h4>Hot Meta Post</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <ModeCommentIcon width="18" />
          <p>38</p>
          <p>
            Why was this spam flag declined, yet <br />
            the question marked
            <br /> as spam ?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <ModeCommentIcon width="18" />
          <p>20</p>
          <p>
            What is the best course of action when <br /> a user has high enough
            rep to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>
            is a link to the "How to ask" help page a <br />
            useful comment ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
