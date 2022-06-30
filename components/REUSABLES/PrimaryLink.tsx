import React from 'react'
import style from '../../styles/ReUsables.module.css';
import Link from 'next/link'

type PrimaryLinkProps = {
    info: string
    to: string;
}


const PrimaryLink: React.FC<PrimaryLinkProps> = ({ info, to }) => {
  return (
    <Link href={to} >
        <button className={style.primary__button} > 
        {info}
    </button> 
    </Link>
  )
}

export default PrimaryLink