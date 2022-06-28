/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from '../../styles/CreateProposal.module.css'
import PrimaryButton from '../REUSABLES/PrimaryButton'
import { proposalIllustration } from '../../Images'


const CreateProposal: React.FC = () => {
  return (
    <form className={style.container} >
        <div className={style.form__div} >
            <h1>Create Proposal</h1>
            <textarea  />
            <PrimaryButton info='Submit' />
        </div>
        <img src={proposalIllustration} alt="proposalIllustration" />
    </form>
  )
}

export default CreateProposal