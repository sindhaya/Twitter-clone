import React from "react";
import Navbar from "../../Navbar/Navbar";
import TwitterPost from "../../middleContainer/TwitterPost";
import style from "./MiddleContainer.module.css";
import Tweet from "../../../Atom/Tweet/Tweet";
import WhatHappening from "../../WhatHappening/WhatHappening";
function MiddleContainer() {
  return (
    <>
      <div className={style.main}>
        <div className={style.navbarContainer}>
          <Navbar />
        </div>
        <div className={style.twitterPostContainer}>
          <WhatHappening />
        </div>
        <div className={style.postContainer}>
          <TwitterPost />
        </div>
      </div>
    </>
  );
}

export default MiddleContainer;
