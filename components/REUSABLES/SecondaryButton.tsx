import React from 'react'
import style from '../../styles/ReUsables.module.css';

type SecondaryButtonProps = {
    info: string
    onPress: () => void
}


const SecondaryButton: React.FC<SecondaryButtonProps> = ({ info, onPress }) => {
  return (
    <button className={style.secondary__button} onClick={onPress} > 
        {info}
    </button> 
  )
}

export default SecondaryButton