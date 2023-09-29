import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faIndoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  // set the focus on the user input onLoad
  const inputRef = useRef();
  // set the focus on the error input
  const errRef = useRef();

  //States for userName
  const [user, serUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //States for Pass
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  //States for Matching Password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  //States for possible Error Messages
  const [errMsg, setErrorMsg] = useState("");

  //State for Succesfully submiting form
  const [succes, setSucces] = useState(false);

  // Focus input user when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //validate userName
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  //validate pwd
  useEffect(() => {
    const resultPwd = PWD_REGEX.test(pwd);
    setValidPwd(resultPwd);

    const resultMatchPwd = matchPwd === pwd;
    setValidMatchPwd(resultMatchPwd);
  }, [pwd, matchPwd]);

  //Reset error message
  useEffect(() => {
    setErrorMsg("");
  }, [pwd, user, matchPwd]);

  return <section></section>;
};

export default Register;
