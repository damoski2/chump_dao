import React, { useContext } from "react";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import style from "../../styles/Footer.module.css";
import TimeLine from "../TimeLine/TimeLine";
import Link from "next/link";
import { BlockChainContext } from "../../context/BlockChainContext";

const Footer = () => {
  const { loading } = useContext(BlockChainContext);

  return (
    <div style={{ display: loading && "none" }} className={style.container}>
      <div className={style.footer__section}>
        <div className={style.footer__links}>
          <div className={style.child__div}>
          <Link href="https://www.notion.so/ChumpDAO-cdc494b32af749a8b4023c77e4189246">
            <h2 style={{ cursor: "pointer" }}>About ChumpDAO</h2>
          </Link>
            <Link href="/">
              <p style={{ cursor: "pointer" }}>Home</p>
            </Link>
            <Link href="https://www.linkedin.com/company/garnerly/mycompany/">
              <p style={{ cursor: "pointer" }}>Get In touch</p>
            </Link>
            <p style={{ cursor: "pointer" }}>FAQs</p>
          </div>
          <div className={style.child__div}>
            <h2>Product</h2>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="https://www.linkedin.com/company/garnerly/mycompany/">
              <p style={{ cursor: "pointer" }}>Get In touch</p>
            </Link>
            <p style={{ cursor: "pointer" }}>FAQs</p>
          </div>
        </div>
        <div className={style.waitlist}>
         <h2>Waitlist</h2>
          <p>Join garnerly waitlist using SDK</p>
          <div className={style.waitlist__form}>
            <input type="text" />
            <PrimaryButton info="Submit" onPress={(): void => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
