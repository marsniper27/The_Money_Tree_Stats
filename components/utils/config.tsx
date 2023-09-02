import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import ABI from './abi.json'
import USDTABI from './usdt.json'
export const STAGE = process.env.REACT_APP_STAGE;
export const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS || "0xEaE382adf90e28603b9D9f49E4207bc5051370c9";//process.env.REACT_APP_CONTRACT_ADDRESS ? process.env.REACT_APP_CONTRACT_ADDRESS: "0xEaE382adf90e28603b9D9f49E4207bc5051370c9";//'0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e';
export const CONTRACT_ABI: AbiItem[] = process.env.REACT_APP_CONTRACT_ABI ? JSON.parse(process.env.REACT_APP_CONTRACT_ABI) : ABI;
export const USDT_ABI: AbiItem[] = process.env.REACT_APP_USDT_ABI ? JSON.parse(process.env.REACT_APP_USDT_ABI) : USDTABI;

export const TIERS = process.env.TIERS ? JSON.parse(process.env.TIERS): [ 
  {
    "name": "Devs/Marketing/Charity",
    "tierNum": 0,
    "maxPayout": 0,
    "price": 0,
    "users":11,
    "epochUsers":11,
    "percentage":0.30,
    "poolValue":0,
    "roiWinners":0,
    "roiPayout":0,
    "returnPerUser":0,
    "distributionValue":0,
  },
  {
    "name": "Branch",
    "tierNum": 1,
    "maxPayout": 3500*4,
    "price": 3500,
    "users":26,
    "epochUsers":11,
    "percentage":0.26,
    "poolValue":0,
    "roiWinners":0,
    "roiPayout":0,
    "returnPerUser":0,
    "distributionValue":0
  },
  {
    "name": "Stalk",
    "tierNum": 2,
    "maxPayout": 1500*3,
    "price": 1500,
    "users":27,
    "epochUsers":11,
    "percentage":0.18,
    "poolValue":0,
    "roiWinners":0,
    "roiPayout":0,
    "returnPerUser":0,
    "distributionValue":0
  },
  {
    "name": "Leaves",
    "tierNum": 3,
    "maxPayout": 100*2,
    "price": 100,
    "users":307,
    "epochUsers":11,
    "percentage":0.13,
    "poolValue":0,
    "roiWinners":0,
    "roiPayout":0,
    "returnPerUser":0,
    "distributionValue":0
  },
];


export async function initializeWeb3Instances() {
  try {
    // const provider = new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org/');
    const provider = new Web3.providers.HttpProvider('https://bscrpc.com');
    const web3 = new Web3(provider);

    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const usdt = new web3.eth.Contract(USDT_ABI, '0x55d398326f99059fF775485246999027B3197955');
    return {web3,contract,usdt}
  } catch (error) {
    console.log('Failed to connect to the network:', error);
  }
}
