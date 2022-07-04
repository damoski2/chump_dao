/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/TimeLinePurchase.module.css";
import { arrowLeftIcon, sendIcon, timeBalanceIcon, arrowUp, blockchainIcom } from "../../Images";
import Link from "next/link";

const purchase: React.FC = (): JSX.Element => {
  return (
    <form className={style.container}>
      <h1 className={style.header__timeline} >Purchase TimeLine tokens</h1>
      <div className={style.purchase__block}>
        <div className={style.surround}>
          <div className={style.metrics}>
            <img src={timeBalanceIcon} alt="timeBalanceIcon" className={style.timeBalanceIcon} />
            <span>+0.00045% <img src={arrowUp} alt="arrowUp" /> </span>
          </div>
          <div className={style.price}>
            <h1>$3,500</h1>
            <p>2.3 ETH</p>
          </div>
        </div>
        <textarea />
      </div>
      <div className={style.button__link}>
        <button>
          <img src={sendIcon} alt="sendIcon" />
          <h1>Buy</h1>
        </button>
        <Link href="">
          <button>
            <img src={arrowLeftIcon} alt="sendIcon" />
            <h1>Home</h1>
          </button>
        </Link>
      </div>
    </form>
  );
};

export default purchase;
