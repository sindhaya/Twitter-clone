import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userProfile, userTweet, userTweetProfile } from "../../../Recoil/Atom";

import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CustomButton from "../../../Atom/Button/CustomButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import Profile from "../../../Pages/Profile/Profile";
import Profile2 from "../../../Pages/Profile2/Profile2";
import SyncIcon from "@mui/icons-material/Sync";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import style from "./ProfileSection.module.css";
import style2 from "./Unknownuser.module.css";

function ProfileSection() {
  const uid = useParams();
  const nevigate = useNavigate();
  const unknownProfileData = useRecoilValue(userProfile);
  const replyTweetPost = useSetRecoilState(userTweet);
  const replyProfileDetails = useSetRecoilState(userTweetProfile);
  const tweets = unknownProfileData.tweets;
  const [likesCount, setLikesCount] = useState(1000);
  const [icon, setIcon] = useState("blue");

  function handleLike() {
    likesCount === 1000 ? setLikesCount(1001) : setLikesCount(1000);
    if (likesCount === 1000) {
      setIcon("red");
    } else {
      setIcon("blue");
    }
  }

  function forReply(takeData) {
    replyTweetPost(takeData);
    nevigate("/Tweetpage");
  }
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.feed__header}>
          <p onClick={() => nevigate("/Home")}>
            <WestIcon />
          </p>
          <h2>{unknownProfileData.name}</h2>
        </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
        <div>
          <span className={style.Avatarsection}>
            <img className={style.img} src={unknownProfileData.tweetPic} />

            <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
          </span>
        </div>
        <div className={style.textcontaint}>
          <h4>{`Name:- ${unknownProfileData.name}`}</h4>
          <h5>{`${unknownProfileData.handlerName}`}</h5>
          <h5>{`${"tweetCount:-"}${unknownProfileData.tweetCount}`}</h5>
          <h5>{`${"likescount:-"}${unknownProfileData.likesCount}`}</h5>
          <h5>{`${"followers:-"}${unknownProfileData.followers}`}</h5>
          <h5>{`${"followings:-"}${unknownProfileData.followings}`}</h5>
        </div>
      </div>
      <div>
        {tweets && tweets.length > 0
          ? tweets.map((x) => {
              return (
                <>
                  <div key={x.id}>
                    <div
                      className={style2.wrapper}
                      onClick={() =>
                        forReply({
                          name: unknownProfileData.name,
                          id: x.id,
                          tweetText: x.tweetText,
                          tweetPic: x.tweetPic,
                          tweetCount: x.tweetCount,
                          retweetCount: x.retweetCount,
                          likesCount: x.likesCount,
                          viewsCount: x.viewsCount,
                          TweetReplies: {
                            name: x.TweetReplies.map((y) => y.name),
                            handlerName: x.TweetReplies.map(
                              (y) => y.handlerName
                            ),
                            tweetReplyText: x.TweetReplies.map(
                              (y) => y.tweetReplyText
                            ),
                          },
                        })
                      }
                    >
                      <div className={style2.container1}>
                        <div>
                          <Avatar className={style2.avatar} src={x.tweetPic} />
                        </div>

                        <div className={style2.innercontainer}>
                          <span className={style2.text}>
                            <h3>
                              {unknownProfileData.name}
                              <VerifiedIcon style={{ color: "#1DA1F2" }} />
                            </h3>
                          </span>
                          <p>{x.tweetText}</p>
                        </div>
                      </div>

                      <div className={style2.img}>
                        <img alt="picture" src={x.tweetPic} />
                      </div>
                      <div className={style2.icons}>
                        <span>
                          {x.tweetCount}
                          <ChatBubbleOutlineIcon />
                        </span>
                        <span>
                          {x.retweetCount}
                          <SyncIcon />
                        </span>
                        <span>
                          {x.likesCount}
                          <FavoriteBorderIcon />
                        </span>
                        <span>
                          {x.viewsCount}
                          <PollIcon />
                        </span>

                        <UploadIcon />
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default ProfileSection;
