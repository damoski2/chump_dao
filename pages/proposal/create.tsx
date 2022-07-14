import React, { useContext } from 'react'
import { CreateProposal } from '../../components/imports'
import { BlockChainContext } from '../../context/BlockChainContext'
import { Loader } from '../../components/imports'

const Create: React.FC = (): JSX.Element => {

    const { loading } = useContext(BlockChainContext)

    if(loading){
        return <Loader />
    }

    return (
        <div>
            <CreateProposal />
        </div>
    )
}

export default Create
