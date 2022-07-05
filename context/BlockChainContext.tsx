import React, { createContext, useState, useEffect } from 'react'
import { ReturnData, fetchCryptoAssets } from '../api/crypto'
import toast, { Toaster } from 'react-hot-toast';


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
      setLoading(false);
      console.log(error)
      toast.error('Connection Error!');
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
    currentUser,
    cryptoAssets,
    timeLineBalance,
    loading,
    connectWallet
   }}>
    		<Toaster 
				position='top-center'
				gutter={8}

				toastOptions={{
					className: '',
					duration: 5000,
					style: {
					  background: '#363636',
					  color: '#fff',
					},
					success: {
						style: {
						  background: '#102f10',
						  width: '700px',
						  animation: 'custom-enter 1s ease'
						},
						theme: {
							primary: '#00cc10',
							secondary: '#00aa60',
						}
					},

					error: {
						style: {
							background: '#f10021',
							width: '700px',
							animation: 'custom-enter 1s ease'
						},
						theme: {
							primary: '#f10021',
							secondary: '#d10011',
						}
					}
				}}
			/>
    {children}
   </BlockChainContext.Provider>
  )
}
