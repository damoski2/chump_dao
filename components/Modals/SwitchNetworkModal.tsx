import React, { useContext } from 'react';
import style from '../../styles/SwitchNetworkModal.module.css'
import { BlockChainContext } from '../../context/BlockChainContext'


const SwitchNetworkModal = (): JSX.Element => {

  const {  } = useContext(BlockChainContext);

  return (
    <div className={style.container} >
      <div className={style.actual__modal}>
        <div className={style.info} >
            <h2>Different Network Detected</h2>
        </div>
        <div className={style.network} >

        </div>
      </div>
    </div>
  )
}

export default SwitchNetworkModal