import { forLocalStorageIndex, forPassingId, userTweet } from "../../../Recoil/Atom";

import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from "./Tweetpost.module.css";
import { tweetPosts } from "../../../ConstData/ConstData";
import { useRecoilValue } from "recoil";
import { useState } from "react";
// import TweetReply from '../../../Atom/TweetReply/TweetReply';
// import CustomButton from '../../../Atom/Button/CustomButton';
function Tweetpost() {
  const [post, setPost] = useState(JSON.parse(localStorage.getItem("constTweetPosts")));
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  let Data = JSON.parse(localStorage.getItem("user"));

  const tweetPostData = useRecoilValue(userTweet);
  const index = useRecoilValue(forPassingId);
  // console.log(post[index].tweetComment[0].tweetComment)
  //console.log(index)
  return (
    <>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar className={style2.avatar} src={tweetPostData.tweetPic} />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                {tweetPostData.name}
                <VerifiedIcon style={{ color: "blue" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>

        <div className={style2.img}>
          <img
            alt="picture"
            src={tweetPostData.tweetPic}
          />
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>

          <UploadIcon />
        </div>
      </div>
     
      {post[index].tweetComment.length > 0 ? (
        <>
          {post[index].tweetComment.map((data) => (
            <div className={style2.wrapper}>
              <div className={style2.container1}>
                <div>
                  <Avatar
                    className={style2.avatar}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg"
                  />
                </div>

                <div className={style2.innercontainer}>
                  <>
                    <span className={style2.text}>
                      <h3>
                        {Data[getLocalStorageIndex].Name}
                        <VerifiedIcon style={{ color: "#1D9BF0", fontSize: "1.5rem" }} />
                      </h3>
                    </span>
                    <p>{data.tweetComment}</p>
                  </>
                </div>
              </div>
              <div className={style2.icons}>
                <span>
                  {tweetPostData.tweetCount}
                  <ChatBubbleOutlineIcon />
                </span>
                <span>
                  {tweetPostData.retweetCount}
                  <SyncIcon />
                </span>
                <span>
                  {tweetPostData.likesCount}
                  <FavoriteBorderIcon />
                </span>
                <span>
                  {tweetPostData.viewsCount}
                  <PollIcon />
                </span>
                <UploadIcon />
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
       <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg"
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Elon Musk
                <VerifiedIcon style={{ color: "blue" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>
          <UploadIcon />
        </div>
      </div>
    </>
  );
}

export default Tweetpost;