import React, { createContext, useState, useEffect } from "react";
import { ReturnData, fetchCryptoAssets } from "../api/crypto";
import { getDaiTokenContract, getDaoContract, getTimeLineContract } from "./SmartContractProvider";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";

type ContextProp = {
  children: JSX.Element;
};

type TransactionData = {
  value?: string,
  from: string,
}

export const BlockChainContext: React.Context<T> = createContext<null>(null);

let ethereum: any;
let solana;

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
  solana = window.solana;
}

export const BlockChainProvider: React.FC<ContextProp> = ({
  children,
}): JSX.Element => {
  //Get Smart contracts
  const daiTokenContract = ethereum && getDaiTokenContract();
  const daoContract = ethereum && getDaoContract();
  const timeLineContract = ethereum && getTimeLineContract();

  const [currentUser, setCurrentUser] = useState<string>();
  const [cryptoAssets, setCryptoAssests] = useState<ReturnData | null>();
  const [timeLineBalance, setTimeLineBalance] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [totalProposal, setTotalProposal] = useState<number>(0);
  const [totalVote, setTotalVote] = useState<number>(0);

  const getCryptoAssests = async (): Promise<void> => {
    const [data, error] = await fetchCryptoAssets();
    //console.log(data)
    setCryptoAssests(data);
  };

  const checkIfWalletConnected = async (): Promise<void> => {
    try {
      setLoading(true);
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      accounts.length && setCurrentUser(accounts[0]);

      //Set TimeLineBalance after user connection
      if(timeLineContract){
        let timeLineBalance = await timeLineContract.balanceOf(accounts[0]);
        timeLineBalance = ethers.utils.formatEther(timeLineBalance.toString());
        setTimeLineBalance(timeLineBalance);
      }

      if(daoContract){
        let proposalTotal = await daoContract.totalProposal({
          from: accounts[0],
        } as TransactionData);
        setTotalProposal(proposalTotal.toNumber());

        let voteTotal = await daoContract.totalVote({
          from: accounts[0],
        } as TransactionData);
        setTotalVote(voteTotal.toNumber());
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Connection Error!");
    }
  };

  const connectWallet = async (): Promise<string | void> => {
    //console.log('pressed')
    try {
      setLoading(true);
      if (!ethereum) return toast.error("Please install MetaMask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentUser(accounts[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("No Ethereum Object!");
    }
  };

  const buyTimeLine = async (number: number): Promise<string | void> => {
    try {
      setLoading(true);
      if(!ethereum) return toast.error("Please Install MetaMask");
      const transactionHash = await daiTokenContract.buytimeline({
        value: number.toString(),
        from: currentUser
      } as TransactionData);
      await transactionHash.wait();
      setLoading(false);
      toast.success("Transaction Successful!");
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error("Transaction Failed, Check Args or User Ethers supply!")
    }
  };

  useEffect(() => {
    getCryptoAssests();
  }, []);

  return (
    <BlockChainContext.Provider
      value={{
        currentUser,
        cryptoAssets,
        timeLineBalance,
        loading,
        totalProposal,
        totalVote,
        connectWallet,
        buyTimeLine
      }}
    >
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            style: {
              background: "#102f10",
              width: "700px",
              animation: "custom-enter 1s ease",
            },
            theme: {
              primary: "#00cc10",
              secondary: "#00aa60",
            },
          },

          error: {
            style: {
              background: "#f10021",
              width: "700px",
              animation: "custom-enter 1s ease",
            },
            theme: {
              primary: "#f10021",
              secondary: "#d10011",
            },
          },
        }}
      />
      {children}
    </BlockChainContext.Provider>
  );
};
