import React, { createContext, useState, useEffect } from 'react'
import { ReturnData, fetchCryptoAssets } from '../api/crypto'


type ContextProp = {
  children: JSX.Element;
}

export const BlockChainContext: React.Context<T> = createContext<null>(null);

let ethereum: any;
let solana;

if (typeof window !== 'undefined'){
	ethereum = window.ethereum;
	solana = window.solana;
}


export const BlockChainProvider: React.FC<ContextProp> = ({ children }): JSX.Element => {


  //Get Smart contracts
  

  const [currentUser, setCurrentUser] = useState<string>();
  const [cryptoAssets, setCryptoAssests] = useState<ReturnData | null>()
  const [timeLineBalance, setTimeLineBalance] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);

  const getCryptoAssests = async (): Promise<void> => {
    const [data, error] = await fetchCryptoAssets();
    //console.log(data)
    setCryptoAssests(data);
  };

  const checkIfWalletConnected = async (): Promise<void> => {
    try{
      setLoading(true)
      if(!ethereum) return alert('Please Install Metamask');

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      accounts.length && setCurrentUser(accounts[0]);
    }catch(error){

    }
  }

  const connectWallet = async(): Promise<void>=>{
    try{
      setLoading(true)
      if(!ethereum) return alert('Please install MetaMask')
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      setCurrentUser(accounts[0]);
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }


  useEffect(() => {
    getCryptoAssests()
  },[])

  return (
   <BlockChainContext.Provider value={{

   }}>
    {children}
   </BlockChainContext.Provider>
  )
}
