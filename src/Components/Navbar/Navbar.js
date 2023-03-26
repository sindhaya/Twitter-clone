import React from "react";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>
        <div>
        </div>
        <div className={style.innercontainer}>
        <h3>For you</h3>
        <h3>Following</h3>
      </div>
      </div>
    </>
  );
}
export default Navbar;
