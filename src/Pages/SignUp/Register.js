import { Date, Dayy, Month } from "../../Components/Dob/Dob";
import React, { useEffect, useState } from "react";
import { forLocalStorageIndex, isLoginAtom } from "../../Recoil/Atom";
import {
  isValidEmail,
  isValidMobile,
  isValidPassword,
  isValidString,
} from "../../helper";

import CustomButton from "../../Atom/Button/CustomButton";
import Input from "../../Atom/Input/Input";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import style from "./Register.module.css";
import styleDob from "../../Components/Dob/Dob.module.css";
import { tweetPosts } from "../../ConstData/ConstData";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

function Register() {
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);
  const [incl, setIncl] = useState(0);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [emailError, setEmailError] = useState();
  const [nameError, setNameError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [dobError, setDobError] = useState();
  const [passwordError, setPasswordError] = useState("");
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const navigate = useNavigate();
  const setLocalStorageIndex = useSetRecoilState(forLocalStorageIndex);
  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  function handleName(inputName) {
    setName(inputName);
  }
  function handleMobile(inputMobile) {
    setPhone(inputMobile);
  }
  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handlePassword(inputPassword) {
    setPassword(inputPassword);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleDay(inputDay) {
    setDay(inputDay);
  }

  function submitFunction() {
    console.log(date);
    const Data = {
      id: nanoid(3),
      Name: name,
      Phone: phone,
      Email: email,
      password: password,

      Month: month,
      Year: day,
      Date: date,
    };

    let flag = 0;
    if (!isValidString(name)) {
      setNameError("please fill correct name input");
      //  flag = 0;
    } else {
      setNameError("");
    }

    if (toggle === true) {
      if (!isValidMobile(phone)) {
        setPhoneError("please fill correct phone input");
      } else {
        setPhoneError("");
      }
    } else {
      if (!isValidEmail(email)) {
        setEmailError("please fill correct email input");
      } else {
        setEmailError("");
      }
    }
    if (!isValidPassword(password)) {
      // flag=0
      setPasswordError("please fill correct password input");
    } else {
      setPasswordError("");
    }

    if (
      (isValidString(name) &&
        isValidMobile(phone) &&
        isValidPassword(password)) ||
      (isValidString(name) && isValidEmail(email) && isValidPassword(password))
    ) {
      flag = 1;
    } else {
      flag = 0;
    }
    if (Data.Month == "" || Data.Date == "" || Data.Year == "") {
      flag = 0;
      setDobError("please fill correct DOB input");
    } else {
      setDobError("");
    }

    if (flag == 1) {
      var flagForLs = 0;
      if (localStorage.length != 0) {
        let k = JSON.parse(localStorage.getItem("user"));
        k.map((element) => {
          if (element.Email === email) {
            flagForLs = 1;
          }
        });
      }
    }

    if (flagForLs == 1) {
      alert("USER Email is Already Exist");
    } else {
    }

    if (flag == 1 && flagForLs == 0) {
      data.push(Data);
      setData([...data]);

      if (localStorage.length == 0) {
        if (localStorage.key(1) != "constTweetData")
          localStorage.setItem("constTweetPosts", JSON.stringify(tweetPosts));
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        let oldData = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem("user", JSON.stringify([...oldData, ...data]));
        let c = localStorage.key(1);
        console.log(c);
        if (c == null)
          localStorage.setItem("constTweetPosts", JSON.stringify(tweetPosts));
      }
      alert("USER Sucessfully Registered");
      setLoginStatus(true);
      navigate("/Home");
      let Data1 = JSON.parse(localStorage.getItem("user"));
      setLocalStorageIndex(Data1.length - 1);
    }
  }
  return (
    <div className={style.container}> 
      <div className={style.container1}>
        <div className={style.mainContainer}>
          {form ? (
            <>
              <div className={style.form}>
                <div>
                  <h1>Create your account</h1>
                </div>
                <div>
                  <Input
                    className={style.input1}
                    placeholder="Name"
                    handleOnchange={handleName}
                  />

                  <span style={{ color: "red" }}>{nameError}</span>
                  <div className={style.toogleData}>
                    {toggle ? (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="Phone"
                          handleOnchange={handleMobile}
                        />
                        <span style={{ color: "red" }}>{phoneError}</span>
                      </>
                    ) : (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="email"
                          handleOnchange={handleEmail}
                        />
                        <span style={{ color: "red" }}>{emailError}</span>
                      </>
                    )}
                    <span className={style.toggle} onClick={ToggleEU}>
                      {toggle ? (
                        <h6> Use Email instead </h6>
                      ) : (
                        <h6>Use Phone instead</h6>
                      )}
                    </span>
                    <div>
                      <Input
                        className={style.input2}
                        placeholder="Password"
                        handleOnchange={handlePassword}
                        type={"password"}
                      />
                      <span style={{ color: "red" }}>{passwordError}</span>
                    </div>
                    <div>
                      <div>
                        <h4  >Date of birth</h4>
                        <p className="text-conf">
                          This will not be shown publicly. Confirm your own age,
                          even if this account is for a business, a pet, or
                          something else.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styleDob.container}>
                    <Month handleOnchange={handleMonth} />
                    <Date handleOnchange={handleDate} />
                    <Dayy handleOnchange={handleDay} />
                  </div>
                  <span style={{ color: "red" }}>{dobError}</span>
                </div>
                <div>
                <>
                  <CustomButton
                    buttonText="next"
                    customCss={style.formbtn}
                    btnNext={submitFunction}
                  ></CustomButton>
                  
                  </>
                </div>
                 
              </div>
            </>
          ) : (
            <>
              <p className={style.logo}>
                <i class="fa fa-brands fa-twitter"></i>
              </p>
              <h1 className="join-text">Join Twitter today</h1>
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-google"></i>}
                  buttonText="Sign in with google"
                  customCss={style.CustomButton1}
                ></CustomButton>
              </div>
              <br />
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-apple"></i>}
                  buttonText="Sign in with Apple"
                  customCss={style.CustomButton2}
                />
              </div>
              <div className={style.or}>
                <p className={style.line}>----</p>
                OR
                <p className={style.line}>----</p>
              </div>
              <div className={style.signupbtn}>
                <CustomButton
                  btnNext={Form}
                  buttonText="sign up with phone number or email"
                  customCss={style.CustomButton3}
                />
                <p className="text2" >
                  By signing up, you agree to the Terms,
                   Service <br /> and Privacy Policy.
                   
                  and Privacy Policy, including Cookie Use.
                </p>
              </div>
              <div className={style.txt2}>
                Have an Account? <Link to="/"> Log in</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
