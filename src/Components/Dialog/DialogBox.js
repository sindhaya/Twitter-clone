import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./Dialog.module.css";
import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom";


function DialogBox(props) {
  

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  function handaleClick() {
    let text = 'Do You Logout ! \nEither Ok or Cancel';
      if(window.confirm (text) == true){
          setLoginStatus(false);
    alert("successfully Logout");
      } else {
        text = " Cancel"
      }
  }
  return (
    <Dialog onClose={handleClose} open={props.open}>
      <div className={style.container}>
        <CustomButton
          buttonText="Add an existing user"
          customCss={style.button}
         
        />
        <CustomButton
          btnNext={handaleClick}
          buttonText="Logout"
          customCss={style.button}
        />
      </div>
    </Dialog>
  );
}
export default DialogBox;