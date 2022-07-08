import React, { useContext } from 'react';
import style from '../../styles/SwitchNetworkModal.module.css'
import { BlockChainContext } from '../../context/BlockChainContext'


const SwitchNetworkModal = (): JSX.Element => {

  const { switchNetwork, networkSwitchModalOpen } = useContext(BlockChainContext);

  const net_switch =()=>{
    switchNetwork('0x4');
  }

  return networkSwitchModalOpen && (
    <div className={style.container} >
      <div className={style.actual__modal}>
        <div className={style.info} >
            <h2>Different Network Detected</h2>
            <p>Switch to Supported Network</p>
        </div>
        <div className={style.network} >
            <p>Network:</p>
            <span onClick={net_switch} >Rinkeby</span>
        </div>
      </div>
    </div>
  )
}

export default SwitchNetworkModal