import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
export const STAGE = process.env.REACT_APP_STAGE;
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS || '0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e';
export const POOL_ADDRESS = '0xc0a7302fc54224c9b510bd9ce382046e13ee55fa';
export const TOKEN_ABI: AbiItem[] = process.env.REACT_APP_TOKEN_ABI
? JSON.parse(process.env.REACT_APP_TOKEN_ABI)
: [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]
export let supportedChains =[
    {
        id: 137,
        name: "Polygon Mainnet",
        rpcUrl: "https://polygon-rpc.com/",
        tokens:[
              {
                  name:"USDC",
                  address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                  contract:null as Contract | null,
                  balance:null
              },
              {
                  name:"USDT",
                  address:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
                  contract:null as Contract | null,
                  balance:null
              },
              {
                  name:"DAI",
                  address:"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
                  contract:null as Contract | null,
                  balance:null
              }],
        web3Instance: null as Web3 | null,
        currentSupply: null,
        totalInvestment:null
    },
    {
        id: 42161,
        name: "Arbitrum One",
        rpcUrl: "https://arb1.arbitrum.io/rpc",
        tokens:[
              {
                  name:"USDC",
                  address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                  contract:null as Contract | null,
                  balance:null
              },
              {
                  name:"USDT",
                  address:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
                  contract:null as Contract | null,
                  balance:null
              },
              {
                  name:"DAI",
                  address:"0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
                  contract:null as Contract | null,
                  balance:null
              }],
            web3Instance: null as Web3 | null,
            currentSupply: null,
            totalInvestment:null
    },
    {
        id: 9201,
        name: "UNHAPPY FINIS VALORUM",
        rpcUrl: "https://rpc.buildbear.io/unhappy-finis-valorum-09f05a00",
        tokens:[
            {
                name:"USDC",
                address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            },
            {
                name:"USDT",
                address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            },
            {
                "name":"DAI",
                "address":"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            }],
        web3Instance: null as Web3 | null,
        currentSupply: null,
        totalInvestment:null
    },
    {
        id: 9202,
        name: "SCARY JABBA DESILIJIC TIURE",
        rpcUrl: "https://rpc.buildbear.io/scary-jabba-desilijic-tiure-99c10308",
        tokens:[
            {
                name:"USDC",
                address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            },
            {
                name:"USDT",
                address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            },
            {
                name:"DAI",
                address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                contract:null as Contract | null,
                balance:null
            }],
        web3Instance: null as Web3 | null,
        currentSupply: null,
        totalInvestment:null
    },
    {
      id: 80001,
      name: "Mumbai",
      rpcUrl: "https://matic-mumbai.chainstacklabs.com",
      tokens:[
            {
                name:"USDC",
                address:"0xe11A86849d99F524cAC3E7A0Ec1241828e332C62",
                contract:null as Contract | null,
                balance:null
            },
            {
                name:"USDT",
                address:"0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
                contract:null as Contract | null,
                balance:null
            },
            {
                name:"DAI",
                address:"0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253",
                contract:null as Contract | null,
                balance:null
            }],
        web3Instance: null as Web3 | null,
        currentSupply: null,
        totalInvestment:null
    }
  ];

  
export const TIERS = process.env.TIERS ? JSON.parse(process.env.TIERS): [
    {
      "tierNum": 1,
      "minAmount": 1,
      "maxAmount": 1000,
      "price": 1
    },
    {
        "tierNum": 2,
        "minAmount": 1001,
        "maxAmount": 5000,
        "price": 0.95
    },
    {
        "tierNum": 3,
        "minAmount": 5001,
        "maxAmount": 100000000,
        "price": 0.90
    },
  ];


  export async function initializeWeb3Instances() {
    for (const chain of supportedChains) {
      try {
        const provider = new Web3.providers.HttpProvider(chain.rpcUrl);
        const web3 = new Web3(provider);
        chain.web3Instance = web3;
  
        for (const token of chain.tokens) {
          const tokenContract = new web3.eth.Contract(TOKEN_ABI, token.address);
          token.contract = tokenContract;
          const tokenBalance = await tokenContract.methods.balanceOf(POOL_ADDRESS).call();
          token.balance = tokenBalance;
        }
  
        const tokenContract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
        chain.currentSupply = await tokenContract.methods.totalSupply().call();
        chain.totalInvestment = await tokenContract.methods.totalInvestment().call();
      } catch (error) {
        console.log('Failed to connect to the network:', error);
      }
    }
  }

