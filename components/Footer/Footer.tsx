import React from "react";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import style from "../../styles/Footer.module.css";
import TimeLine from "../TimeLine/TimeLine";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer__section}>
        <div className={style.footer__links}>
          <div className={style.child__div}>
            <h2>About ChumpDAO</h2>
            <p>Home</p>
            <p>Get In touch</p>
            <p>FAQs</p>
          </div>
          <div className={style.child__div}>
            <h2>Product</h2>
            <p>Home</p>
            <p>Get In touch</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className={style.waitlist}>
          <h2>About ChumpDAO</h2>
          <p>Join garnerly waitlist using SDK</p>
          <div className={style.waitlist__form}>
            <input type="text" />
            <PrimaryButton info="Submit" onPress={():void =>{}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
