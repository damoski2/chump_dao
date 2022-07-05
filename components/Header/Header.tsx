/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import style from "../../styles/Header.module.css";
import { logo, pointerDown } from "../../Images.js";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import { BlockChainContext } from "../../context/BlockChainContext";
import Link from "next/link";
import Identicon from 'identicon.js'



const Header: React.FC = () => {

  const { connectWallet, currentUser } = useContext(BlockChainContext);

  const formatUser: ()=>string = (): string=>{
    if(currentUser){
      return currentUser.substring(0,6)+"..."+currentUser.substring(currentUser.length-4,currentUser.length);
    }
    return "";
  }


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
        {currentUser?(
          <div className={style.eth__address} >
            <img src={`data:image/png;base64,${new Identicon(
                  currentUser,
                  30
                ).toString()}`} alt="currentUser" />
            <p>{formatUser()}</p>
          </div>
        ):(
          <div className={style.button}>
          <PrimaryButton onPress={connectWallet} info="Connect Wallet" />
        </div>
        )}
        <div className={style.humbuger}>
          <div />
          <div />
        </div>
      </nav>
    </section>
  );
};

export default Header;
