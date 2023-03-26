import React, { useRef, useState } from "react";
import style from "./TweetReply.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { HiOutlineGif } from "react-icons/hi2";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../Button/CustomButton";
import ConstData from "../../ConstData/ConstData";
import { tweetPosts } from "../../ConstData/ConstData";
import { useRecoilState } from "recoil";
import { isTweetPost, Personaltweet,forPassingId } from "../../Recoil/Atom";
// import { Avatar } from "antd";

function TweetReply() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [post,setPost]=useState(tweetPosts)
  // const [profileTweet, setProfileTweet] = useRecoilState(Personaltweet)
  // const [loginStatus, setLoginStatus] = useRecoilState(isTweetPost);
  const[index,setIndex]=useRecoilState(forPassingId)
  // const [forTrue, setForTrue] = useState(0);
  const [storeArray, setStoreArray] = useState("");
  // let Data = JSON.parse(localStorage.getItem("user0"));
  const inputRef = useRef(null);
  const Icons = [
    { id: 0, icon: <HiOutlineGif /> },
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
    // console.log(index)
    let newObj1={
      tweetComment:storeArray
    }
    //post[index].tweetComment=([...post[index].tweetComment,newObj1])
    // console.log(storeArray)
    //localStorage.setItem("const tweetPosts[2].tweetComment" , "ghyy")
   let k=JSON.parse(localStorage.getItem("constTweetPosts"))
   console.log(k)
   k[index].tweetComment=([...k[index].tweetComment,newObj1])
   localStorage.setItem("constTweetPosts", JSON.stringify(k))

  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          <CustomButton
            buttonText="X"
            customCss={style.btnClose}
            btnNext={handleClose}
          />
        
          <div className={style.wrapper}>
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
                  <div key={menu.id} className={style.iconsContent}>
                    <div
                      className={style.icons}
                      onClick={() => handleOnClickIcon(menu.action)}
                    >
                      <div>{menu.icon}</div>
                    </div>
                  </div>
                );
              })}
              <CustomButton
                buttonText="Reply000"
                btnNext={handleNewTweet}
                customCss={style.button}
              />
            </div>
          </div>
        </div>
     
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
export default TweetReply;