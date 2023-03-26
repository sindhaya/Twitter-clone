import { atom } from "recoil";


export const isLoginAtom = atom({ //
  key: "isLogin",
  default:true,
});

/*use value in TwitterPost.js(middleContainer) Take value from WhatHappening.js(WhatHappening) for use in useEffect for render again 
value is increment by one when new post is push into the array*/
export const isTweetPost = atom({
  key: "isPost",  
  default: 0,
});

/* Take Value from TwitterPost.js for storing Unknown user object details
Use vale in Unknownuser.js(ProfileSection) 
for redirect the new page which is profile2 for showing the user details when we click into the user (Avatar)icon in home page
*/
export const userProfile = atom({
  key: "userProfile",
  default: {},
});


export const isTweet = atom({
  key: "isTweet",
  default: 0,
});
/* Take value From  Unknownuser.js(ProfileSection) store userdetails with comment of unknown user into a object 
usevalue in Tweetpost.js and navigate new page which is TweetPage
*/
export const userTweet = atom({
  key: "userTweet",
  default: {},
});

export const userTweetProfile = atom({
  key: "userTweetProfile",
  default: {},
});
/* Take value from Tweet.js and WhatHappening.js store current user's tweet and photo into Array
  useValue in UserTweet.js
*/
export const Personaltweet = atom({
  key: "Personaltweet",
  default: [],
});

export const isTweetreply = atom({
  key: "isTweetreply",
  default: 0,
});

export const Tweetreply = atom({
  key: "Tweetreply",
  default: {},
});

/*Take value from TwitterPost.js for recognize the id of the const Array
useVaue in TweetReply.js and
and TweetPost.js
to disply reply/comment userr for perticular tweet
*/
export const forPassingId = atom({
  key: "Passid",
  default:1,
});
/* Take value from Register.js for detect id in localStorage user
useValue in Menuitem.js , ProfileSection.js , Tweetpost.js , Whathappenig.js
*/
export const forLocalStorageIndex = atom({
  key: "forLocalStorageIndex",
  default:0,
});

export const countForTweet = atom({
  key: "countForTweet",
  default:0,
});

