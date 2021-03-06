import React, { useContext } from 'react'
import style from '../../styles/ProposalList.module.css';
import Link from 'next/link'
import { staticProposal, Proposal } from '../../static/staticProposal'
import { BlockChainContext } from '../../context/BlockChainContext'


type StyleProp = {
    backgroundColor: string,
    color: string,
    padding: string,
    borderRadius: string,
    width: string,
    cursor: string,
}

const ListProposal: React.FC = () => {

  const { allProposals } = useContext(BlockChainContext)

  const returnStyle: (value:string)=> StyleProp = (_status: string): StyleProp=>{
    switch(_status){
        case 'Ongoing':
            return {
                backgroundColor: 'rgba(216, 239, 247, 0.5)',
                color: '#15A5D2',
                padding: '10px',
                borderRadius: '32px',
                width: 'fit-content',
                cursor: 'pointer'
            }
            break;

        case 'Accepted':
            return {
                backgroundColor: 'rgba(202, 252, 205, 0.5)',
                color: '#2FEF37',
                padding: '10px',
                borderRadius: '32px',
                width: 'fit-content',
                cursor: 'pointer'
            }
            break;

        case 'Rejected':
            return {
                backgroundColor: 'rgba(251, 218, 216, 0.5)',
                color: '#F21D0F',
                padding: '10px',
                borderRadius: '32px',
                width: 'fit-content',
                cursor: 'pointer'
            }

        default:
            return {
                backgroundColor: 'rgba(216, 239, 247, 0.5)',
                color: '#15A5D2',
                padding: '10px',
                borderRadius: '32px',
                width: 'fit-content',
                cursor: 'pointer'
            }
            break;
    }
  }


  return (
    <div className={style.container} >
        <h1>Recent Proposals</h1>
        <div className={style.proposal__table} >
            <div className={style.list__header}>
                <p>ID</p>
                <p className={style.description} >Description</p>
                <p className={style.status} >Status</p>
            </div>
            <div className={style.rule} />
            {allProposals.map((proposal: Proposal, index: number) => (
                index!==0&&<div key={index} className={style.actual__list}>
                    <p>{proposal.id}</p>
                    <p className={style.description} >{proposal.description}</p>
                    <Link href={`/proposal/${proposal.id}`} >
                        <p className={style.status} 
                            style={returnStyle(proposal.status)}
                        >{proposal.status}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListProposal