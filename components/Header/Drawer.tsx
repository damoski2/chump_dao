/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useEffect } from "react";
import { BlockChainContext } from "../../context/BlockChainContext";
import Link from "next/link";
import { cancelIcon, logo } from "../../Images";
import { useRouter } from "next/router";
import Identicon from "identicon.js";
import SecondaryButton from "../REUSABLES/SecondaryButton";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import style from'./Drawer.module.css'
import gsap from 'gsap'
import cx from 'classnames'



const Drawer: React.FC = () => {

 const menu = useRef<HTMLImageElement>(null);
 const drawer = useRef<HTMLDivElement>(null)
 const {
    connectWallet,
    currentUser,
    disconnectWallet,
    handleNavOpen,
    navOpen,
    loading
  } = useContext(BlockChainContext);

  //Menu toggle gsap
  var tl = gsap.timeline({ paused: true });


  const handleToggle = ()=>{
    //console.log(navOpen)
    if(navOpen){
        tl.to(drawer.current,{
            duration: 1,
            ease: 'power3.out',
            y: 0
        }).to(".gsap_child",{
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
              each: 0.2,
              ease: "power1.in"
            }
        }).reverse()
    }else{
        tl.to(drawer.current,{
            duration: 1,
            ease: 'power3.out',
            y: -100+'%'
        }).to(".gsap_child",{
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
              each: 0.2,
              ease: "power1.in"
            }
        }).reverse()
    }
  }


  useEffect(()=>{
    handleToggle()
    tl.reversed(!tl.reversed())
    menu.current!.classList.toggle(style.active)
  },[navOpen])  


  const router = useRouter();

 


  const returnActiveStyle = (_pathname: string): React.CSSProperties => {
    switch (_pathname) {
      case router.pathname:
        return {
          color: '#1A171B'
        };

      default:
        return {};
        break;
    }
  };
  
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

  return (
    <div style={{ display: loading&&'none' }} ref={drawer} className={style.drawer}>
      <img ref={menu} src={cancelIcon} onClick={handleNavOpen} alt="cancelIcon" className={cx(style.cancelIcon,'gsap_child')} />
      <ul className={style.links}>
        <Link href="/timeline/purchase">
          <li style={returnActiveStyle("/timeline/purchase")} className="gsap_child" >Timeline
            <div className={style.rule} />
          </li>
        </Link>
        <Link href="/proposal/list">
          <li style={returnActiveStyle("/proposal/list")} className="gsap_child" >Proposals<div className={style.rule} /></li>
        </Link>
        <Link href="https://www.garnerly.app/">
          <li style={returnActiveStyle("")} className="gsap_child" >Garnerly</li>
        </Link>
      </ul>

      {currentUser ? (
          <div className={style.auth__section}>
            <div className={cx(style.eth__address, 'gsap_child')}>
              <img
                src={`data:image/png;base64,${new Identicon(
                  currentUser,
                  30
                ).toString()}`}
                alt="currentUser"
              />
              <p>{formatUser()}</p>
            </div>
            <div className={cx(style.sec__button, 'gsap_child')} >
            <SecondaryButton info="Log Out" onPress={disconnectWallet} />
            </div>
          </div>
        ) : (
          <div className={cx(style.button, 'gsap_child')}>
            <PrimaryButton onPress={connectWallet} info="Connect Wallet" />
          </div>
        )}

      <img src={logo} alt="logo" className={cx(style.logo,'gsap_child')} />
    </div>
  );
};

export default Drawer;
