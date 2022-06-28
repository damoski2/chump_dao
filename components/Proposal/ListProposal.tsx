import React from 'react'
import style from '../../styles/ProposalList.module.css';


interface Proposal{
    id: string | number;
    description: string;
    status: string;
}

const staticProposal: Proposal[] = [
    {
        id: 1,
        description: 'Should we start a burger joint?',
        status: 'Ongoing'
    },
    {
        id: 2,
        description: 'Should we start a burger joint?',
        status: 'Accepted'
    },
    {
        id: 3,
        description: 'Should we start a burger joint?',
        status: 'Ongoing'
    },
    {
        id: 4,
        description: 'Should we start a burger joint?',
        status: 'Ongoing'
    },
]


const ListProposal = () => {
  return (
    <div className={style.container} >
        <h1>Recent Proposals</h1>
        
    </div>
  )
}

export default ListProposal