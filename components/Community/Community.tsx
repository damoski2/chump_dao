/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Community.module.css";
import {
  communitiesIllustration,
  lemonCircle,
  navyBlueCircle,
  pinkCircle,
  linerCircle,
  checkIcon,
} from "../../Images";
import gsap from "gsap";
import { TimelineMax } from "gsap";

const Community: React.FC = () => {
  useEffect(() => {
    const tlCircle = new TimelineMax({ repeat: -1 });
    tlCircle
      .to(".circle1", 3, {
        duration: 1,
        scale: 1.1,
        ease: "power1.easeInOut",
        y: "-=30",
        x: "+=20",
        rotation: "-=5",
      })
      .to(".circle1 > img", 3, {
        y: "-=30",
        x: "+=20",
        rotation: "-=5",
        ease: "power1.easeInOut",
      })
      .to(".circle1 > img", 2, {
        y: "+=30",
        x: "-=20",
        rotation: "-=5",
        ease: "power1.easeInOut",
      })
      .to(".circle1 > img", 3, {
        y: "-=20",
        rotation: "+=5",
        ease: "power1.easeInOut",
      })
      .to(".circle1 > img", 3, {
        y: "+=20",
        rotation: "+=5",
        ease: "power1.easeInOut",
      });
  }, []);

  return (
    <div className={style.container}>
      <h1>Join a decentralized community building a better tomorrow</h1>
      <div className={style.body}>
        <img
          src={communitiesIllustration}
          className={style.community__illustration}
          alt="communitiesIllustration"
        />
        <div className={style.right__div}>
          <h2>Make your voice heard</h2>
          <div className={style.info__div}>
            <img src={checkIcon} alt="checkIcon" />
            <p>Propose new causes and discuss how ChumpDAO should run</p>
          </div>
          <div className={style.info__div}>
            <img src={checkIcon} alt="checkIcon" />
            <p>Propose new causes and discuss how ChumpDAO should run</p>
          </div>
          <div className={style.info__div}>
            <img src={checkIcon} alt="checkIcon" />
            <p>Propose new causes and discuss how ChumpDAO should run</p>
          </div>
        </div>
      </div>
      <div className={style.circle__div}>
        <div className="circle1" style={{ position:'absolute', left: '40em', zIndex:'-1' }} >
          <img
            src={pinkCircle}
            alt="pinkCircle"
            className="circle"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className="circle2">
          <img
            src={navyBlueCircle}
            alt="navyBlueCircle"
            className={style.circle}
          />
        </div>
        <div className="circle3">
          <img src={lemonCircle} alt="lemonCircle" className={style.circle} />
        </div>
        <div className="circle4">
          <img src={linerCircle} alt="linerCircle" className={style.circle} />
        </div>
      </div>
    </div>
  );
};

export default Community;
