import React from 'react'
import style from '../../styles/Proposal.module.css';
import { noDataIllustration } from '../../Images';


type Prop = {
    slug: string;
}

const Proposal: React.FC<Prop> = ({ slug }): JSX.Element => {


    const inValidProposal = (): JSX.Element =>{
        return(
            <div>

            </div>
        )
    }

    const validProposal = (): JSX.Element =>{
        return(
            <div>

            </div>
        )
    }

    return(
        <div>
            {inValidProposal()}
        </div>
    )
}
  

export default Proposal
