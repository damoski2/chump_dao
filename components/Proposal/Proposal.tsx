import React, { useState, useEffect } from "react";
import style from "../../styles/Proposal.module.css";
import { noDataIllustration } from "../../Images";
import { staticProposal, Proposal } from "../../static/staticProposal";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import { trioCircle } from "../../Images";
import ProgressBar from "@ramonak/react-progress-bar";

type Prop = {
  slug: string;
};

const Proposal: React.FC<Prop> = ({ slug }): JSX.Element => {
  const [proposal, setProposal] = useState<Proposal>();

  useEffect(() => {
    setProposal(
      staticProposal?.find((proposal) => proposal.id === Number(slug))
    );
  }, [slug]);

  const inValidProposal = (): JSX.Element => {
    return <div></div>;
  };

  const validProposal = (): JSX.Element => {
    return (
      <div className={style.vote__info}>
        <div className={style.vote__header}>
          <img src={trioCircle} alt="trioCircle" />
          <h3>vote</h3>
        </div>
        <div className={style.rule} />
        <div className={style.vote__details}>
          <div className={style.vote__for}>
            <div className={style.text}>
              <p>Votes For</p>
              <h2>10</h2>
            </div>
            <div className={style.progress__bar}>
              <p>35%</p>
              <ProgressBar completed={60} isLabelVisible={false} />
            </div>
          </div>
          <div className={style.vote__against}>
            <div className={style.text}>
              <p>Votes For</p>
              <h2>10</h2>
            </div>
            <div className={style.progress__bar}>
              <p>35%</p>
              <ProgressBar completed={60} isLabelVisible={false} />
            </div>
          </div>
        </div>
        <h2>
          Proposer: <span>{proposal?.proposer ?? "0x00000000"}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h2>{proposal?.description ?? "Default description"}</h2>
      <div className={style.proposal__section}>
        {validProposal()}
        <form className={style.cast__vote}>
          <h2>Cast Vote</h2>
          <div className={style.input__div}>
            <div>
              <input type="radio" value="For" id="For" />
              <label htmlFor="For"></label>
            </div>
            <div>
              <input type="radio" value="For" id="For" />
              <label htmlFor="For"></label>
            </div>
          </div>
          <PrimaryButton info="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Proposal;
