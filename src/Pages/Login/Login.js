import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { forLocalStorageIndex, isLoginAtom } from "../../Recoil/Atom";

import CustomButton from "../../Atom/Button/CustomButton";
import { FaTwitter } from "react-icons/fa";
import Input from "../../Atom/Input/Input";
import { Link } from "react-router-dom";
import { isValidLogin } from "../../helper";
import style from "./Login.module.css";
import { useSetRecoilState } from "recoil";

function Login() {
  const [nextbtn, setNextBtn] = useState(false);
 
  const nevigate = useNavigate();
  const [loginv, setLoginV] = useState("");
  const [passWordValue, setPasswordValue] = useState("");
  const [localstorageKey, setLocalstorageKey] = useState();
  const [loginError, setLoginError] = useState("");
  const setLocalstorageIndex=useSetRecoilState(forLocalStorageIndex)
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  function loginValue(inputLogin) {
    setLoginV(inputLogin);
  }
  function passWordChangeValue(inputPassword) {
    setPasswordValue(inputPassword);
  }
  const buttonNext = () => {
    let flag = 1;
    if (isValidLogin(loginv)) {
      setLoginError("Give Username or Email or Phoneno");

      flag = 1;
    } else {
      flag = 0;
    }

    let flagForLs = 0;
    //for (var i = 0; i < localStorage.length; i++) {
      if(localStorage.length==0)
      {
        alert("LocalStorage is empty")
      }
      else
      {
      let k = JSON.parse(localStorage.getItem("user"));
      k.map((element,i)=>{
        console.log(element.Email)
        if (element.Email === loginv || element.Name === loginv || element.Phone == loginv) {
          flagForLs = 1;
          //const store=i;
          console.log(element.Email)
          setLocalstorageKey(i);
          setLocalstorageIndex(i)
        }


      })
      
      }
    //}
    //console.log(flagForLs)
      
    //}
    if (flagForLs == 1 && flag == 0) {
      setNextBtn(true);
    } else if (flagForLs == 0) {
      setNextBtn(false);
      setLoginError("User Not Found");
    }
    
  };
  const handleLogIn = () => {
 

    let flagForLs = 0;
    let k = JSON.parse(localStorage.getItem("user"));
   // console.log(k.password);
   

    if (k[localstorageKey].password === passWordValue) {
      flagForLs = 1;
    }
  
    if (flagForLs == 1) {
      setLoginStatus(true);
      alert("succesfully login");
      
      nevigate("/Home");
    } else {
      alert("false");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.container1}>
          <FaTwitter className={style.logo} />
          {nextbtn ? (
            <>
              <div className={style.containerpass}>
                <h1>Enter your Password</h1>
                <div>
                  <Input
                    className={style.input2}
                    placeholder="passsword"
                    handleOnchange={passWordChangeValue}
                    type={"password"}
                  />
                </div>

                <div className={style.password}>
                  <CustomButton
                    buttonText="Log In"
                    btnNext={handleLogIn}
                    customCss={style.loginbtn}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style.text}>
                <h1>Sign in to Twitter</h1>
              </div>

              <CustomButton
                buttonText="Sign in with Google"
                customCss={style.btn1}
                icon={<i className="fa fa-brands fa-google"></i>}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Sign in with Apple"
                icon={<i className="fa fa-brands fa-apple"></i>}
                customCss={style.btn1}
              ></CustomButton>
              <br />
              <div className={style.or}>
                <span style={{ display: "flex" }}>
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                  &nbsp;&nbsp;or&nbsp;&nbsp;
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                </span>
              </div>
              <br />
              <div>
                <Input
                  className={style.input}
                  placeholder="Phone, email or username"
                  handleOnchange={loginValue}
                />
              </div>
              <span style={{ color: "red" }}>{loginError}</span>
              <br />
              <CustomButton
                buttonText="Next"
                customCss={style.btn1}
                btnNext={buttonNext}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Forgot Password?"
                customCss={style.btnForget}
                style={{ backgroundColor: "black" }}
              ></CustomButton>
              <br />
            </>
          )}
          <div className={style.para}>
            <div>
              Don't have an account?{" "}
              <Link to="/Register">
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
