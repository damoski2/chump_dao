/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState, useCallback } from "react";
import style from "../../styles/Community.module.css";
import {
  communitiesIllustration,
  bitcoinIcon,
  usdcIcon,
  ethereumIcon,
  blockchainIcom,
  checkIcon,
} from "../../Images";
import gsap from "gsap";
import { TimelineMax, TweenLite, Sine } from "gsap";

type randonFun = (arg: number) => number;

function random(min: number, max: number): () => number {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

const randomX: randonFun = random(10, 20);
const randomY: randonFun = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle: randonFun = random(8, 12);

function rotate(target: JSX.Element, direction: number): void {
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
}

function moveX(target: JSX.Element, direction: number): void {
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
}

function moveY(target: JSX.Element, direction: number): void {
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
}

const Community: React.FC = () => {
  const ref: React.MutableRefObject<any | JSX.Element> = useRef();
  const ref2: React.MutableRefObject<any | JSX.Element> = useRef();
  const ref3: React.MutableRefObject<any | JSX.Element> = useRef();
  const ref4: React.MutableRefObject<any | JSX.Element> = useRef();

  //const can = document.querySelector(".circle1 > img")

  //States

  //LifeCycle
  useEffect(() => {
    console.log(ref.current);
    TweenLite.set(ref.current, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    });
    moveX(ref.current, 1);
    moveY(ref.current, -1);
    rotate(ref.current, 1);

    TweenLite.set(ref2.current, {
      x: randomX(-3),
      y: randomX(2),
      rotation: randomAngle(-2),
    });
    moveX(ref2.current, 3);
    moveY(ref2.current, -1);
    rotate(ref2.current, 2);

    TweenLite.set(ref3.current, {
      x: randomX(-2),
      y: randomX(-1),
      rotation: randomAngle(-1),
    });
    moveX(ref3.current, 2);
    moveY(ref3.current, 1);
    rotate(ref3.current, -3);

    TweenLite.set(ref4.current, {
      x: randomX(3),
      y: randomX(2),
      rotation: randomAngle(-2),
    });
    moveX(ref4.current, -1);
    moveY(ref4.current, -2);
    rotate(ref4.current, 2);
  }, [ref, ref2, ref3, ref4]);

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
        <div
          className="circle1"
          ref={ref}
          style={{ position: "absolute", left: "75em", zIndex: "21" }}
        >
          <img
            id="circle"
            src={ethereumIcon}
            alt="ethereumIcon"
            className="circle"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div
          className="circle2"
          style={{ position: "absolute", left: "79em", top: '6em', zIndex: "21" }}
          ref={ref2}
        >
          <img
            src={usdcIcon}
            alt="usdcIcon"
            className="circle"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div
          className="circle3"
          style={{ position: "absolute", left: "9em", top: '6em', zIndex: "21" }}
          ref={ref3}
        >
          <img
            src={bitcoinIcon}
            alt="bitcoinIcon"
            className={style.circle}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div ref={ref4} className="circle4" style={{ position: "absolute", left: "9em", zIndex: "21" }} >
          <img
            src={blockchainIcom}
            alt="blockchainIcom"
            className={style.circle}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
function setRect(arg0: DOMRect) {
  throw new Error("Function not implemented.");
}
