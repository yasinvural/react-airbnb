import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>2020 Airbnb clone! No rights reserved </p>
      </div>
      <div className="footer__right">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
