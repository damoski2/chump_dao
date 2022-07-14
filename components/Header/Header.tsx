/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import style from "../../styles/Header.module.css";
import { logo, pointerDown } from "../../Images.js";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import { BlockChainContext } from "../../context/BlockChainContext";
import Link from "next/link";
import Identicon from "identicon.js";
import { useRouter } from "next/router";
import SecondaryButton from "../REUSABLES/SecondaryButton";
import Drawer from './Drawer';

const Header: React.FC = () => {
  const router = useRouter();

  const { connectWallet, currentUser, disconnectWallet, navOpen, handleNavOpen, loading } =
    useContext(BlockChainContext);

  const formatUser: () => string = (): string => {
    if (currentUser) {
      return (
        currentUser.substring(0, 6) +
        "..." +
        currentUser.substring(currentUser.length - 4, currentUser.length)
      );
    }
    return "";
  };

  const returnActiveStyle = (_pathname: string): React.CSSProperties => {
    switch (_pathname) {
      case router.pathname:
        return {
          border: "1.5px solid #000000",
          padding: "10px 14px",
          borderRadius: "7px",
        };

      default:
        return {};
        break;
    }
  };

  return (
    <section className={style.overall} style={{ display: loading&&'none' }} >
      
      <nav className={style.container}>
        <Link href="/">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
        <div className={style.line} />
        <ul className={style.links}>
          {/*   <Link href="">
            <li>
              App <img src={pointerDown} alt="pointerDown" />{" "}
            </li>
          </Link> 
          <Link href="/">
            <li style={returnActiveStyle("/")} className={style.dao}>
              DAO
            </li>
          </Link>*/}
          <Link href="/timeline/purchase">
            <li style={returnActiveStyle("/timeline/purchase")}>Timeline</li>
          </Link>
          <Link href="/proposal/list">
            <li style={returnActiveStyle("/proposal/list")}>Proposals</li>
          </Link>
          <Link href="https://www.garnerly.app/">
            <li style={returnActiveStyle("")}>Garnerly</li>
          </Link>
        </ul>
        {currentUser ? (
          <div className={style.auth__section}>
            <div className={style.eth__address}>
              <img
                src={`data:image/png;base64,${new Identicon(
                  currentUser,
                  30
                ).toString()}`}
                alt="currentUser"
              />
              <p>{formatUser()}</p>
            </div>
            <SecondaryButton info="Log Out" onPress={disconnectWallet} />
          </div>
        ) : (
          <div className={style.button}>
            <PrimaryButton onPress={connectWallet} info="Connect Wallet" />
          </div>
        )}
        <div onClick={handleNavOpen} className={style.humbuger}>
          <div />
          <div />
        </div>
      </nav>
    </section>
  );
};

export default Header;
