import React, { useRef, useState } from "react";
import style from "./Tweet.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../Button/CustomButton";
import ConstData from "../../ConstData/ConstData";
import { tweetPosts } from "../../ConstData/ConstData";
import { useRecoilState ,useRecoilValue} from "recoil";
import { isTweetPost ,Personaltweet ,forLocalStorageIndex} from "../../Recoil/Atom";
import { Avatar } from "antd";

function Tweet() {
  let Data = JSON.parse(localStorage.getItem("user"));
  const [personal, setPersonal ] = useRecoilState(Personaltweet);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  const [loginStatus, setLoginStatus] = useRecoilState(isTweetPost);
  const [forTrue, setForTrue] = useState(0);
  const [storeArray, setStoreArray] = useState("");
  const inputRef = useRef(null);
  const disabled=(!storeArray)
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage />, action: "pickImage" },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];
  function takeTweet(e) {
    setStoreArray(e.target.value);
  }
  function handleOnClickIcon(action) {
    if (action === "pickImage") {
      inputRef.current.click();
    }
  }

  // Function to pick image
  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  function handleNewTweet() {
    setIsOpen(true);

    let newObj = {
      name: Data[getLocalStorageIndex].Name,
      handlerName:  Data[getLocalStorageIndex].Email,
      organization: "United States government organization",
      tweetText: storeArray,
      tweetPic: image,
      tweetCount: 100,
      retweetCount: 100,
      likesCount: 100,
      viewsCount: "102k",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    };

    tweetPosts.unshift(newObj);

    setForTrue(forTrue + 1);
    setLoginStatus(loginStatus + 1);
    inputRef.current.value=""
    setPersonal([newObj,...personal])
    
  }

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          {/* <button onClick={Handleclose}>X</button> */}
          <div className={style.wrapper}>
            <Avatar></Avatar>
            <textarea
              placeholder="What's happening?........"
              rows={8}
              cols={60}
              onChange={takeTweet}
            ></textarea>

            <div className={style.privacy}>
              <FaGlobe />
              <span>Everyone can reply</span>
            </div>
            {image && (
              <div className={style.imageWrapper}>
                <img src={image} height="100%" width="100%" alt="foo" />
              </div>
            )}
            <div className={style.iconscontainer}>
              {Icons.map((menu) => {
                return (
                  <div
                    className={style.icons}
                    key={menu.id}
                    onClick={() => handleOnClickIcon(menu.action)}
                  >
                    <div>{menu.icon}</div>
                  </div>
                );
              })}
                 <CustomButton
                 disable={disabled}
            buttonText="Tweet"
            btnNext={handleNewTweet}
            customCss={style.button}
          />
            </div>
          </div>
       
        </div>
        {/* hidden input */}
        <input
          type="file"
          hidden
          ref={inputRef}
          onChange={handleOnSelectImage}
          name="tweetPic"
        />
      </div>
    </>
  );
}
export default Tweet;