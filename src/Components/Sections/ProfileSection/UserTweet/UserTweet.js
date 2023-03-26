import React, { useEffect, useState } from 'react'
import style2 from "./UserTweet.module.css"
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import {Personaltweet} from "../../../../Recoil/Atom"
import { useRecoilState } from 'recoil'

function UserTweet() {
    const [data,setData]= useRecoilState(Personaltweet)
    console.log(data);
  return (
    <>
    {data?.map((x)=>{
        return(
            <div className={style2.wrapper}>
            <div className={style2.container1}>
                      <div >
                      
                        <Avatar   className={style2.avatar} src={x.tweetPic} />
                       
                      </div>
        
                      <div className={style2.innercontainer}>
                        <span className={style2.text}>
                          <h3>{x.name}<VerifiedIcon style={{color:"#1DA1F2"}}/></h3>
                        </span>
                        <p>{x.tweetText}</p>
                      </div>
                    </div>
        
                    <div className={style2.img}>
     
              <img
                style={{
                  width: "30rem",
                  height: "30rem",
                  borderRadius: "15px",
                }}
                alt="picture"
                src={x.tweetPic
                }
              /> 
              {/* : <></> } */}
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
                        <div></div>
          
            </div> 
        )
    })}

    </>
    
  )
}

export default UserTweet


