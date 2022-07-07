import React, { createContext, useState, useEffect } from "react";
import { ReturnData, fetchCryptoAssets } from "../api/crypto";
import {
  getDaiTokenContract,
  getDaoContract,
  getTimeLineContract,
} from "./SmartContractProvider";
import toast, { Toaster } from "react-hot-toast";
import { ethers, BigNumber } from "ethers";
import { DaiTokenAddress } from "../utils/constants";
import Web3 from "web3";

type ContextProp = {
  children: JSX.Element;
};

type TransactionData = {
  value?: string;
  from: string;
};

export type reducedProposal = {
  id: number;
  passed: boolean;
  exists: boolean;
  countConducted: boolean;
  votesDown: number;
  votesUp: number;
  description: string;
  status: string;
  proposer: string;
};

export const BlockChainContext: React.Context<T> = createContext<null>(null);

let ethereum: any;
let solana;

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
  solana = window.solana;
}

const web3 = new Web3(ethereum);

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
  const [totalMembers, setTotalMembers] = useState<number>(0);
  const [totalAsset, setTotalAsset] = useState<string>(0);
  const [allProposals, setAllProposal] = useState<reducedProposal[]>([]);
  const [networkSwitchModalOpen, setNetworkSwitchModalOpen] =
    useState<boolean>(false);

  const getCryptoAssests = async (): Promise<void> => {
    const [data, error] = await fetchCryptoAssets();
    //console.log(data)
    setCryptoAssests(data);
  };

  const convertEthToDollar = async(eth: number): Promise<string> =>{
    try{
      const [data , error] = await fetchCryptoAssets();
    if(data){
      const dollarValue = Math.round(data.market_price * eth);
      return `$${dollarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
    return '$41, 885,192.06'
    }catch(error){
      console.log(error)
      return '$41, 885,192.06';
    }
  }
  

  const checkIfWalletConnected = async (): Promise<void> => {
    try {
      setLoading(true);
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      accounts.length && setCurrentUser(accounts[0]);

      //Set TimeLineBalance after user connection
      if (timeLineContract) {
        let timeLineBalance = await timeLineContract.balanceOf(accounts[0]);
        timeLineBalance = ethers.utils.formatEther(timeLineBalance.toString());
        setTimeLineBalance(timeLineBalance);

        //Set Total Members
        let totalMembers = await timeLineContract.investorsIndex();
        setTotalMembers(totalMembers.toNumber());
      }
      if (daoContract) {
        let proposalTotal = await daoContract.totalProposal({
          from: accounts[0],
        } as TransactionData);
        setTotalProposal(proposalTotal.toNumber());

        let voteTotal = await daoContract.totalVote({
          from: accounts[0],
        } as TransactionData);
        setTotalVote(voteTotal.toNumber());

        //Calculate and set total Assets relative to Pool;
        let assestBalance = await daoContract.fetchTotalAsset({
          from: accounts[0],
        } as TransactionData);
        setTotalAsset(await convertEthToDollar(assestBalance.toNumber()))
        //console.log(assestBalance.toNumber());
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Connection Error!");
    }
  };

  const watchMetamaskNetwork = async (): Promise<string | void> => {
    try {
      if (!ethereum) return toast.error("Please Install Metamask");
      //if(!currentUser) return toast.error("Please Connect to Metamask");
      const networkId = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (networkId !== "1") {
        setNetworkSwitchModalOpen(true);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const changeNetwork = (): void => {
    setNetworkSwitchModalOpen(!networkSwitchModalOpen);
  };

  const switchNetwork = async (chainId: number): Promise<string | void> => {
    try {
      if (!ethereum) return toast.error("Please install MetaMask");
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId.toString() }],
      });
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
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

  const buyTimeLine = async (number: string): Promise<string | void> => {
    try {
      setLoading(true);
      if (!ethereum) return toast.error("Please Install MetaMask");
      const transactionHash = await daiTokenContract.buytimeline({
        value: number,
        from: currentUser,
      } as TransactionData);
      await transactionHash.wait();
      setLoading(false);
      toast.success("Transaction Successful!");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Transaction Failed, Check Args or User Ethers supply!");
    }
  };

  const createProposal = async (about: string): Promise<string | void> => {
    try {
      setLoading(true);
      const transactionHash = await daoContract.createProposal(about, {
        from: currentUser,
      } as TransactionData);
      await transactionHash.wait();
      setLoading(false);
      toast.success("Proposal Created Successfully!");
    } catch (error: any) {
      setLoading(false);
      console.log(error.reason);
      toast.error(`${error.reason ?? "Proposal Creation Failed"}`);
    }
  };

  const proposalVote = async (
    id: number,
    vote: boolean
  ): Promise<string | void> => {
    try {
      setLoading(true);
      const transactionHash = await daoContract.voteOnProposal(id, vote, {
        from: currentUser,
      } as TransactionData);
      await transactionHash.wait();
      setLoading(false);
      toast.success("Vote Successful!");
    } catch (error: any) {
      setLoading(false);
      console.log(error.reason);
      toast.error(`${error.reason ?? "Voting Failed"}`);
    }
  };

  const concludeProposal = async (id: number): Promise<string | void> => {
    try{
      setLoading(true)
      const transactionHash = await daoContract.countVotes(id, { from: currentUser } as TransactionData);
      await transactionHash.wait();
      setLoading(false)
      toast.success("Proposal Concluded Successfully!")
    }catch(error: any){
      setLoading(false);
      console.log(error)
      toast.error(error.reason)
    }
  }

  const fetchProposals = async (): Promise<string | void> => {
    try {
      setLoading(true);
      const proposals = await daoContract.fetchAllProposals({
        from: currentUser,
      } as TransactionData);
      //console.log(proposals)
      let _reducedProposal = proposals.reduce(
        (acc: Array<reducedProposal>, curr: any) => {
          let obj = {
            id: curr["id"].toNumber(),
            passed: curr["passed"],
            countConducted: curr["countConducted"],
            description: curr["description"].toString(),
            exists: curr["exists"].toString(),
            votesDown: curr["votesDown"].toNumber(),
            votesUp: curr["votesUp"].toNumber(),
            status: curr["status"].toString(),
            proposer: curr["proposer"].toString(),
          } as reducedProposal;
          acc = [...acc, obj];
          return acc;
        },
        []
      );
      //console.log(_reducedProposal)
      setAllProposal(_reducedProposal);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCryptoAssests();
    checkIfWalletConnected();
    fetchProposals();
  }, [loading]);

  useEffect(() => {
    currentUser &&
      setTimeout(() => {
        watchMetamaskNetwork();
      }, 10000);
  }, [currentUser]);

  return (
    <BlockChainContext.Provider
      value={{
        currentUser,
        cryptoAssets,
        timeLineBalance,
        loading,
        totalProposal,
        totalVote,
        allProposals,
        totalMembers,
        totalAsset,
        connectWallet,
        buyTimeLine,
        createProposal,
        proposalVote,
        changeNetwork,
        fetchProposals,
        concludeProposal
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
