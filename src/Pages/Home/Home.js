import React, { useEffect } from "react";

import Drawer from "../../Components/Drawer";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import MiddleContainer from "../../Components/Sections/Middle/MiddleContainer";
import RightSide from "../../Components/Sections/Right/RightSide";
import { isLoginAtom } from "../../Recoil/Atom";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/");
    }
  });

  return (
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
        <MiddleContainer />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
     <div>
     <Drawer/>
     </div> 
    </div>
  );
}

export default Home;
