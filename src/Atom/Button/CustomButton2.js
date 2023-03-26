import React from "react";
import style from "./CustomButton.module.css";
function CustomButton2(props) {
  return (
    <div onClick={props.button} className={style.btn2container}>
      <div>{props.picture}</div>
      <div className={style.btn2text}>
        {props.text}
        <br />
        {props.text2}
      </div>
      <div className={style.btndot}>...</div>
    </div>
  );
}

export default CustomButton2;
