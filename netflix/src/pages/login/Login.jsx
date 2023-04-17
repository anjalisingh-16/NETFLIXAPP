import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-use-history";
import axios from "axios";

import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const handleLogin = async(e) => {
    e.preventDefault();
    try{
    await axios.post("auth/login",{email,password})
    // alert("Logged in successfully");
    // render("/home")
    history.push("/home");
    alert("Logged in successfully");
    }
     catch(err)
     {
      alert("You have not been registered!");
      history.push("/");
     }
    // login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <button className="loginbutton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <Link to="/"><b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}