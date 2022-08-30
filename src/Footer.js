import React from "react";
import facebookLogo from "./icon-facebook.svg";
import pinterestLogo from "./icon-pinterest.svg";
import instagramLogo from "./icon-instagram.svg";

export default function Footer() {
  return (
    <div id="footer">
      <img src={facebookLogo} alt="facebook link" />
      <img src={pinterestLogo} alt="pinterest link" />
      <img src={instagramLogo} alt="instagram link" />
    </div>
  );
}
