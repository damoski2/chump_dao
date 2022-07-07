/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import style from "../../styles/TimeLinePurchase.module.css";
import { arrowLeftIcon, sendIcon, timeBalanceIcon, arrowUp, blockchainIcom } from "../../Images";
import Link from "next/link";
import { BlockChainContext } from "../../context/BlockChainContext";
import { useForm } from "../../hooks/form";

const Purchase: React.FC = (): JSX.Element => {

  const { timeLineBalance, buyTimeLine } = useContext(BlockChainContext);

  const { handleChange, submit, values } = useForm(buyTimeLine, 'buyTimeLine', {
    amount: ""
  })

  const timeLineToEth = (): number => {
    return timeLineBalance / 45;
  }

  return (
    <form onSubmit={submit} className={style.container}>
      <h1 className={style.header__timeline} >Purchase TimeLine tokens</h1>
      <div className={style.purchase__block}>
        <div className={style.surround}>
          <div className={style.metrics}>
            <img src={timeBalanceIcon} alt="timeBalanceIcon" className={style.timeBalanceIcon} />
            <span>+0.00045% <img src={arrowUp} alt="arrowUp" /> </span>
          </div>
          <div className={style.price}>
            <h1>{timeLineBalance ?? '3500'} TL</h1>
            <p>{timeLineToEth()} ETH</p>
          </div>
        </div>
        <textarea value={values.amount} name="amount" onChange={handleChange()} />
      </div>
      <div className={style.button__link}>
        <button>
          <img src={sendIcon} alt="sendIcon" />
          <h1>Buy</h1>
        </button>
        <Link href="/">
          <button>
            <img src={arrowLeftIcon} alt="sendIcon" />
            <h1>Home</h1>
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Purchase;
