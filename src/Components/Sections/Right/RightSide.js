import React from "react";
import style from "./RightSide.module.css";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2";
import Trends from "../../rightContainer/RightContainer1/Trends";
import Search from "../../../Atom/Search/search";

function RightSide() {
  return (
    <div className={style.container}>
      <div>
      <Search />
      </div>
       <div>
      <Trends />
      </div>
      <div>
      <RightContainer2 />
      </div>
      <div className={style.copyright}>
        <h6>
          Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
          More... <span>© 2023 </span> Twitter, Inc.
        </h6>
      </div>
    </div>
  );
}

export default RightSide;
