import {
  forPassingId,
  isTweetPost,
  requestedProfileAtom,
  userProfile,
} from "../../Recoil/Atom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Dialog from "@mui/material/Dialog";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import TweetReply from "../../Atom/TweetReply/TweetReply";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style from "./TwitterPost.module.css";
import { tweetPosts } from "../../ConstData/ConstData";
import { useNavigate } from "react-router-dom";

export default function TwitterPost() {
  const [post, setPost] = useState(
    JSON.parse(localStorage.getItem("constTweetPosts"))
  );
  const nevigate = useNavigate();
  const [countForRender, setCountForRender] = useState(0);
  const [newPost, setNewPost] = useRecoilState(isTweetPost);
  const setId = useSetRecoilState(forPassingId);
  const [indexForD, setIndexForD] = useState();
  const [newProfile, setNewProfile] = useRecoilState(userProfile);
  const [newindex, setNewIndex] = useState();

  const [count, setCount] = useState(0);

  function handleLike(takeLikes) {
    console.log(post[takeLikes.Index]);

    if (post[takeLikes.Index].inrDcr === false) {
      post[takeLikes.Index].likesCount = takeLikes.Data + 1;

      setCountForRender(countForRender + 1);
      post[takeLikes.Index].inrDcr = true;
      post[takeLikes.Index].color = "red";
      console.log(post);
    } else {
      post[takeLikes.Index].likesCount = takeLikes.Data - 1;

      setCountForRender(countForRender + 1);
      post[takeLikes.Index].inrDcr = false;
      post[takeLikes.Index].color = "#1DA1F2";
    }
  }

  useEffect(() => {
    fetchData();
  }, [newPost]);
  console.log(newPost);
  function fetchData() {
    setPost(JSON.parse(localStorage.getItem("constTweetPosts")));
  }

  function xyz(dataName) {
    setNewProfile(dataName);
    const paramsValue = dataName.handlerName.replace("@", "");
    nevigate(`/profile2/${paramsValue}`);
    setId(dataName.index);
  }
  const handleClose = () => {
    post[indexForD].isOpen = false;
    setCount(count - 1);
  };
  useEffect(() => {
    handleClickOpen1();
  }, [count]);

  function handleClickOpen1() {
    setId(newindex);
    setIndexForD(newindex);
  }
  function handleClickOpen(index) {
    post[index].isOpen = true;
    setCount(count + 1);
    setNewIndex(index);
  }

  return (
    <>
      {post?.map((data, i) => {
        return (
          <div key={i} className={style.wrapper}>
            <div className={style.container1}>
              <div
                onClick={() =>
                  xyz({
                    name: data.name,
                    handlerName: data.handlerName,
                    organization: data.organization,
                    tweetText: data.tweetText,
                    tweetPic: data.tweetPic,
                    tweetCount: data.tweetCount,
                    retweetCount: data.retweetCount,
                    likesCount: data.likesCount,
                    viewsCount: data.viewsCount,
                    followers: data.followers,
                    followings: data.followings,
                    tweets: data.tweets,
                    index: i,
                  })
                }
              >
                <Avatar className={style.avatar} src={data.tweetPic} />
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>
                    {data.name}
                    <VerifiedIcon
                      style={{
                        color: "#1DA1F2",
                        fontSize: "20px",
                        marginLeft: "4px",
                      }}
                    />
                  </h3>
                </span>
                <h4>{data.handlerName}</h4>
                <h4>{data.tweetText}</h4>
              </div>
            </div>

            <div className={style.img}>
              {data?.tweetPic ? (
                <img alt="picture" src={data.tweetPic} />
              ) : (
                <></>
              )}
            </div>
            <div className={style.icons}>
              <div className={style.icons}>
                {data.tweetCount}
                <ChatBubbleOutlineIcon onClick={() => handleClickOpen(i)} />
                <div className={style.Dialog}>
                  {console.log(data.isOpen)}
                  <Dialog
                    open={data.isOpen}
                    onClose={handleClose}
                    style={{
                      background: "rgba(91, 112, 131, 0.4)",
                      fontSize: "15px",
                      lineHeight: "40px",
                    }}
                  >
                    <TweetReply />
                  </Dialog>
                </div>
              </div>

              <div className={style.icons}>
                {data.retweetCount}
                <SyncIcon />
              </div>
              <div className={style.icons}>
                <p
                  style={{
                    border: "none",
                    background: "none",
                    color: " rgb(102, 102, 192)",
                  }}
                  onClick={() =>
                    handleLike({ Data: data.likesCount, Index: i })
                  }
                >
                  <FavoriteBorderIcon style={{ color: data.color }} />
                </p>
                {data.likesCount}
              </div>
              <div className={style.icons}>
                {data.viewsCount}
                <PollIcon />
              </div>
              <div>
                <UploadIcon />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
