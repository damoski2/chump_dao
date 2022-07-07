/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import style from "../../styles/Proposal.module.css";
import { noDataIllustration } from "../../Images";
import { staticProposal } from "../../static/staticProposal";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import { trioCircle } from "../../Images";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  BlockChainContext,
  reducedProposal,
} from "../../context/BlockChainContext";
import { useForm } from "../../hooks/form";

type Prop = {
  slug: string;
};

type VoteParam = {
  id: number;
  vote: boolean | null;
};

const Proposal: React.FC<Prop> = ({ slug }): JSX.Element => {

  const { allProposals, proposalVote, currentUser, concludeProposal } =
    useContext(BlockChainContext);

  const { handleChange, submit, values } = useForm(
    proposalVote,
    "proposalVote",
    {
      id: Number(slug),
      vote: null,
    } as VoteParam
  );

  const [proposal, setProposal] = useState<reducedProposal>();

  useEffect(() => {
    setProposal(
      allProposals?.find(
        (proposal: reducedProposal) => proposal.id === Number(slug)
      )
    );
  }, [slug, allProposals]);

  //console.log(proposal)

  const inValidProposal = (): JSX.Element => {
    return <div></div>;
  };

  const progressBarCalculation = (_type: string): number => {
    let total: number;
    if (
      typeof proposal?.votesUp === "number" &&
      typeof proposal?.votesDown === "number"
    ) {
      total = proposal?.votesUp + proposal?.votesDown;
      total = total === 0 ? 1 : total;

      switch (_type) {
        case "For":
          return (proposal?.votesUp / total) * 100;
          break;

        case "Against":
          return (proposal?.votesDown / total) * 100;
          break;
      }
    }
    return 0;
  };

  const validProposal = (): JSX.Element => {
    return (
      <div className={style.vote__info}>
        <div className={style.vote__header}>
          <img src={trioCircle} alt="trioCircle" />
          {currentUser === process.env.daoCreatorAddress ? (
            <button onClick={()=>concludeProposal(proposal?.id)} className={style.count__vote}>Count Vote</button>
          ) : (
            <h3>Vote</h3>
          )}
        </div>
        <div className={style.rule} />
        <div className={style.vote__details}>
          <div className={style.vote__for__against}>
            <div className={style.text}>
              <p>Votes For</p>
              <h2>{proposal?.votesUp}</h2>
            </div>
            <div className={style.progress__bar}>
              <p>{progressBarCalculation("For")}%</p>
              <ProgressBar
                bgColor="#6C63FF"
                dir="rtl"
                className={style.progess__bar__ui}
                completed={progressBarCalculation("For")}
                isLabelVisible={false}
                transitionTimingFunction="ease-in"
                animateOnRender={true}
              />
            </div>
          </div>
          <div className={style.vote__for__against}>
            <div className={style.text}>
              <p>Votes Against</p>
              <h2>{proposal?.votesDown}</h2>
            </div>
            <div className={style.progress__bar}>
              <p>{`${progressBarCalculation("Against")}`}%</p>
              <ProgressBar
                bgColor="#6C63FF"
                dir="rtl"
                className={style.progess__bar__ui}
                completed={progressBarCalculation("Against")}
                isLabelVisible={false}
                transitionTimingFunction="ease-in"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>
        <h2 className={style.proposer}>
          Proposer: <span>{proposal?.proposer ?? "0x00000000"}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h2 className={style.proposal__description__heading}>
        {proposal?.description ?? "Default description"}
      </h2>
      <div className={style.proposal__section}>
        {validProposal()}
        {!proposal?.countConducted&&<form onSubmit={submit} className={style.cast__vote}>
          <h2>Cast Vote</h2>
          <div className={style.input__div}>
            <div>
              <input
                type="radio"
                value="For"
                name="vote"
                id="For"
                onChange={handleChange(proposal?.id)}
              />
              <label htmlFor="For">For</label>
            </div>
            <div>
              <input
                type="radio"
                value="Against"
                name="vote"
                id="Against"
                onChange={handleChange(proposal?.id)}
              />
              <label htmlFor="Against">Against</label>
            </div>
          </div>
          <PrimaryButton info="Submit" onPress={(): void => {}} />
        </form>}
      </div>
    </div>
  );
};

export default Proposal;
