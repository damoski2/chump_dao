import React, { useEffect, useContext } from 'react'
import { ListProposal } from '../../components/imports'
import { BlockChainContext } from '../../context/BlockChainContext'


const List: React.FC = () => {

    const { fetchProposals } = useContext(BlockChainContext)

    useEffect(()=>{
        fetchProposals()
    },[])

    return (
        <div>
            <ListProposal />
        </div>
    )
}

export default List
