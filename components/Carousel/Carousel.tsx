import React from "react";
import style from "../../styles/Carousel.module.css";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import RealTime from "./RealTime";
import { mouseIcon } from "../../Images";

const Carousel: React.FC = () => {
  return (
    <div className={style.container}>
      <h1>Join the community, change the future</h1>
      <p>A Fair DAO for voting on equality on garnerly’s internal decisions.</p>
      <RealTime />
      <div className={style.button}>
        <PrimaryButton info="Create Proposal" />
      </div>
      <img src={mouseIcon} alt="" />
      <h3>Explore ChumpDAO</h3>
    </div>
  );
};

export default Carousel;
