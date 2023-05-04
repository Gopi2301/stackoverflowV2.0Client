import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
const Widget = () => {
  return (
    <div>
      <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <ModeEditOutlineIcon />
            <p>
              Observability is key to the future of
              <br /> software (and your devOps career)
            </p>
          </div>
          <div className="right-sidebar-div-2">
            <ModeEditOutlineIcon />
            <p>Podcast 374: How valuable is your screen name?</p>
          </div>
          <h4>Featured on Meta</h4>
          <div className="right-sidebar-div-2">
            <ModeCommentIcon />
            <p>Review queue workflows -Final release...</p>
          </div>
          <div className="right-sidebar-div-2">
            <ModeCommentIcon />
            <p>
              Please welcome Valued Associates #958
              <br />
              -V2Blast #959 -SpencerG
            </p>
          </div>
        </div>
        <h4></h4>
      </div>
    </div>
  );
};

export default Widget;
