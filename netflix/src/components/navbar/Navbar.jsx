import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="link"><span>Homepage</span></Link>
          
          <Link to="/series" className="link"><span>Series</span></Link>
          <Link to="/movies" className="link"><span>Movies</span></Link>
          <Link className="link"><span>New and Popular</span></Link>
          <Link className="link"><span>My List</span></Link><span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
          <Link to="/"><button>Register</button></Link>
          <Link to="/login"><button>Sign In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;