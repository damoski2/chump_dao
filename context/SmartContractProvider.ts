export {}

import Web3 from 'web3';
import { ethers } from 'ethers';
import { DaiTokenAddress, daiTokenABI, DaoAddress, daoABI } from '../utils/constants';

let ethereum: any;

if (typeof window !== 'undefined'){
	ethereum = window.ethereum;
}

const web3 = new Web3(ethereum);


export const getDaiTokenContract = (): ethers.Contract=>{
    const provider = new ethers.providers.Web3Provider(web3.currentProvider as any);
    const signer = provider.getSigner();
    const daiTokenContract = new ethers.Contract(DaiTokenAddress, daiTokenABI, signer);

    return daiTokenContract;
}

export const getDaoContract = ():ethers.Contract=>{
    const provider = new ethers.providers.Web3Provider(web3.currentProvider as any);
    const signer = provider.getSigner();
    const daoContract = new ethers.Contract(DaoAddress, daoABI, signer);

    return daoContract;
}