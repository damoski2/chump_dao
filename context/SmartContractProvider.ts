export {}

import Web3 from 'web3';
import { ethers } from 'ethers';
import { DaiTokenAddress, daiTokenABI, DaoAddress, daoABI, TimeLineAddress, timeLineABI } from '../utils/constants';

let ethereum: any;

if (typeof window !== 'undefined'){
	ethereum = window.ethereum;
}

const web3 = new Web3(ethereum);


export const getDaiTokenContract = async(): Promise<ethers.Contract>=>{
    const provider = new ethers.providers.Web3Provider(web3.currentProvider as any);
    let _signed = await provider.listAccounts();
    const signer = _signed[0]? await provider.getSigner() : await provider.getSigner(process.env.daoCreatorAddress);
    const daiTokenContract = new ethers.Contract(DaiTokenAddress, daiTokenABI, signer);

    return daiTokenContract;
}

export const getDaoContract = async():Promise<ethers.Contract>=>{
    const provider = new ethers.providers.Web3Provider(web3.currentProvider as any);
    let _signed = await provider.listAccounts();
    const signer = _signed[0]? await provider.getSigner() : await provider.getSigner(process.env.daoCreatorAddress);
    const daoContract = new ethers.Contract(DaoAddress, daoABI, signer);

    return daoContract;
}


export const getTimeLineContract = async():Promise<ethers.Contract>=>{
    const provider = new ethers.providers.Web3Provider(web3.currentProvider as any);
    let _signed = await provider.listAccounts();
    const signer = _signed[0]? await provider.getSigner() : await provider.getSigner(process.env.daoCreatorAddress);
    const timeLineContract = new ethers.Contract(TimeLineAddress, timeLineABI, signer);

    return timeLineContract;
}