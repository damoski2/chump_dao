import React from 'react'
import style from '../../styles/ReUsables.module.css';

type PrimaryButtonProps = {
    info: string
    onPress: () => void
}


const PrimaryButton: React.FC<PrimaryButtonProps> = ({ info, onPress }) => {
  return (
    <button className={style.primary__button} onClick={onPress} > 
        {info}
    </button> 
  )
}

export default PrimaryButton