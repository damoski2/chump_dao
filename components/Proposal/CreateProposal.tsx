/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import style from '../../styles/CreateProposal.module.css'
import PrimaryButton from '../REUSABLES/PrimaryButton'
import { proposalIllustration } from '../../Images'
import { BlockChainContext } from '../../context/BlockChainContext' 
import { useForm } from '../../hooks/form'



const CreateProposal: React.FC = () => {

  const { createProposal } = useContext(BlockChainContext)

  const { handleChange, submit, values } = useForm(createProposal , 'createProposal', { about: "" })

  return (
    <form onSubmit={submit} className={style.container} >
        <div className={style.form__div} >
            <h1>Create Proposal</h1>
            <textarea value={values.about} name="about" onChange={handleChange()} />
            <PrimaryButton info='Submit' onPress={():void =>{}} />
        </div>
        <img src={proposalIllustration} alt="proposalIllustration" />
    </form>
  )
}

export default CreateProposal