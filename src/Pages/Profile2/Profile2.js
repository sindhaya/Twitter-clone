import React,{useEffect} from 'react'
import MenuItems from "../../Components/Sections/Left/MenuItems"
import Unknownuser from '../../Components/Sections/ProfileSection/Unknownuser'
import RightSide from '../../Components/Sections/Right/RightSide'
import style from "./Profile2.module.css"
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom";
import { useNavigate } from "react-router-dom";
function Profile2() {

    const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isUserLoggedIn) {
        navigate("/");
      }
    });

  return (
    <div>
          <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
      <Unknownuser />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
    </div>
  )
}

export default Profile2