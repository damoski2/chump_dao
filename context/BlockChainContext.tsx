import React, { createContext, useState, useEffect } from 'react'

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


const BlockChainProvider: React.FC<ContextProp> = ({ children }): JSX.Element => {

  const [currentUser, setCurrentUser] = useState<string>();

  return (
   <BlockChainContext.Provider value={{

   }}>
    {children}
   </BlockChainContext.Provider>
  )
}

export default BlockChainContext