import React, { createContext, useState, useEffect } from 'react'
import { ReturnData, fetchCryptoAssets } from '../api/crypto'

type ContextProp = {
  children: JSX.Element;
}

export const BlockChainContext: React.Context<T> = createContext<null>(null);

let ethereum;
let solana;

if (typeof window !== 'undefined'){
	ethereum = window.ethereum;
	solana = window.solana;
}


export const BlockChainProvider: React.FC<ContextProp> = ({ children }): JSX.Element => {

  const [currentUser, setCurrentUser] = useState<string>();
  const [cryptoAssets, setCryptoAssests] = useState<ReturnData | null>()

  const getCryptoAssests = async (): Promise<void> => {
    const [data, error] = await fetchCryptoAssets();
    console.log(data)
    setCryptoAssests(data);
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
