/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/Header.module.css";
import { logo, pointerDown } from "../../Images.js";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <section className={style.overall}>
      <nav className={style.container}>
        <img src={logo} alt="logo" />
        <div className={style.line} />
        <ul className={style.links}>
          <Link href="">
            <li>
              App <img src={pointerDown} alt="pointerDown" />{" "}
            </li>
          </Link>
          <Link href="">
            <li className={style.dao}>DAO</li>
          </Link>
          <Link href="">
            <li>Technology</li>
          </Link>
          <Link href="">
            <li>Proposal</li>
          </Link>
          <Link href="">
            <li>Contributors</li>
          </Link>
        </ul>
        <div className={style.button}>
          <PrimaryButton info="Connect Wallet" />
        </div>
        <div className={style.humbuger}>
          <div />
          <div />
        </div>
      </nav>
    </section>
  );
};

export default Header;
