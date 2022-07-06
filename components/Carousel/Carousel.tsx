import React, { useContext } from "react";
import style from "../../styles/Carousel.module.css";
import PrimaryLink from "../REUSABLES/PrimaryLink";
import RealTime from "./RealTime";
import { mouseIcon } from "../../Images";


const Carousel: React.FC = () => {

  

  return (
    <div className={style.container}>
      <h1>Join the community, change the future</h1>
      <p>A Fair DAO for voting on equality on garnerly’s internal decisions using timeLine for decentralized governance</p>
      <RealTime />
      <div className={style.button}>
        <PrimaryLink info="Create Proposal" to="/proposal/create" />
      </div>
      <img src={mouseIcon} alt="" />
      <h3>Explore ChumpDAO</h3>
    </div>
  );
};

export default Carousel;
