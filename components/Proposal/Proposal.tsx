import React, { useState, useEffect, useContext } from "react";
import style from "../../styles/Proposal.module.css";
import { noDataIllustration } from "../../Images";
import { staticProposal } from "../../static/staticProposal";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import { trioCircle } from "../../Images";
import ProgressBar from "@ramonak/react-progress-bar";
import { BlockChainContext, reducedProposal } from '../../context/BlockChainContext';
import { useForm } from '../../hooks/form';


type Prop = {
  slug: string;
};

type VoteParam ={
  id: number;
  vote: boolean | null;
}

const Proposal: React.FC<Prop> = ({ slug }): JSX.Element => {


  const { allProposals, proposalVote } = useContext(BlockChainContext)

  const { handleChange, submit, values } = useForm(proposalVote, 'proposalVote', {
    id: Number(slug),
    vote: null
  } as VoteParam)

  const [proposal, setProposal] = useState<reducedProposal>();

  useEffect(() => {
    setProposal(
      allProposals?.find((proposal: reducedProposal) => proposal.id === Number(slug))
    );
  }, [slug, allProposals]);

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
          <div className={style.vote__for__against}>
            <div className={style.text}>
              <p>Votes For</p>
              <h2>10</h2>
            </div>
            <div className={style.progress__bar}>
              <p>35%</p>
              <ProgressBar
                bgColor="#6C63FF"
                dir='rtl'
                className={style.progess__bar__ui}
                completed={60}
                isLabelVisible={false}
                transitionTimingFunction="ease-in"
                animateOnRender={true}
              />
            </div>
          </div>
          <div className={style.vote__for__against}>
            <div className={style.text}>
              <p>Votes Against</p>
              <h2>7</h2>
            </div>
            <div className={style.progress__bar}>
              <p>28%</p>
              <ProgressBar
                bgColor="#6C63FF"
                dir='rtl'
                className={style.progess__bar__ui}
                completed={50}
                isLabelVisible={false}
                transitionTimingFunction="ease-in"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>
        <h2 className={style.proposer} >
          Proposer: <span>{proposal?.proposer ?? "0x00000000"}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h2 className={style.proposal__description__heading} >{proposal?.description ?? "Default description"}</h2>
      <div className={style.proposal__section}>
        {validProposal()}
        <form onSubmit={submit} className={style.cast__vote}>
          <h2>Cast Vote</h2>
          <div className={style.input__div}>
            <div>
              <input type="radio" value="For" name="vote" id="For" onChange={handleChange} />
              <label htmlFor="For">For</label>
            </div>
            <div>
              <input type="radio" value="Against" name="vote" id="Against" onChange={handleChange} />
              <label htmlFor="Against">Against</label>
            </div>
          </div>
          <PrimaryButton info="Submit" onPress={():void =>{}} />
        </form>
      </div>
    </div>
  );
};

export default Proposal;
