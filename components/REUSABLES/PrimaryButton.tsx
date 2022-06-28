import React from 'react'
import style from '../../styles/ReUsables.module.css';

type PrimaryButtonProps = {
    info: string
}


const PrimaryButton: React.FC<PrimaryButtonProps> = ({ info }) => {
  return (
    <button className={style.primary__button} > 
        {info}
    </button> 
  )
}

export default PrimaryButton