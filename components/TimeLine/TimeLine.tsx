/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/TimeLine.module.css";
import { rocketImage } from "../../Images";
import PrimaryLink from "../REUSABLES/PrimaryLink";


const TimeLine: React.FC = (): JSX.Element => {

  return (
    <div className={style.container}>
      <div className={style.info__div}>
        <h2>Don’t have timeline tokens?</h2>
        <div className={style.link__div}>
          <PrimaryLink
            info="Purchase TimeLine"
            to="/timeline/purchase"
          />
        </div>
      </div>
      <img src={rocketImage} alt="rocketImage" />
    </div>
  );
};

export default TimeLine;
