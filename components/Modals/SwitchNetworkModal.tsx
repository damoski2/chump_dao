import React, { useContext } from 'react';
import style from '../../styles/SwitchNetworkModal.module.css'
import { BlockChainContext } from '../../context/BlockChainContext'


const SwitchNetworkModal = (): JSX.Element => {

  const { switchNetwork } = useContext(BlockChainContext);

  return (
    <div className={style.container} >
      <div className={style.actual__modal}>
        <div className={style.info} >
            <h2>Different Network Detected</h2>
            <p>Switch to Supported Network</p>
        </div>
        <div className={style.network} >
            <p>Network:</p>
            <h1 onClick={switchNetwork(4)} >Rinkeby</h1>
        </div>
      </div>
    </div>
  )
}

export default SwitchNetworkModal