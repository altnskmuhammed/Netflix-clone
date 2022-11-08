import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory("");

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix-logo"
        ></img>
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="nav-avatar"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
