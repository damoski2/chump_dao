import React, { useEffect, useContext } from 'react'
import { ListProposal } from '../../components/imports'
import { BlockChainContext } from '../../context/BlockChainContext'
import { Loader } from '../../components/imports'



const List: React.FC = () => {

    const { loading } = useContext(BlockChainContext)

    if(loading){
        return <Loader />
    }


    return (
        <div>
            <ListProposal />
        </div>
    )
}

export default List
