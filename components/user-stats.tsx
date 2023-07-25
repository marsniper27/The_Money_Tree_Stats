'use client'
import { useState, useEffect} from 'react';
import { TOKEN_ADDRESS, TOKEN_ABI, supportedChains, POOL_ADDRESS, ICO_STATUS, FIRST_FOUR_MONTHS } from '@/components/utils/config';
import { useWeb3 } from '@/components/utils/Web3Context';
import Web3 from 'web3';
import DegenPlays from'@/public/images/icons/degenplays_logo.svg'
import SellDegen from '@/components/utils/sellDegen';

export default function HeroHome() {
  const web3 = useWeb3();
  const [tokenBalance, setTokenBalance] = useState('Loading...');
  const [userTokens, setUserTokens ] = useState(0)
  const [totalSupply, setTotalSupply ] = useState(0)
  const [totalRaised, setTotalRaised ] = useState(0)
  const [poolValue, setPoolValue ] = useState(0)
  const [userTokensPurchased, setUserTokensPurchased ] = useState(0)
  const [userInvestment, setUserInvestment ] = useState(0)
  const [selectedChain, setSelectedChain ] = useState<any>('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenAmount, setTokenAmount ] = useState(0);
  const [selectedToken, setSelectedToken ] = useState<{ name: string; balance: number; allowance: number; decimals: number } | undefined>();
  const [tokenOptions, setTokenOptions] = useState<any[]>([]);
  const [approvePurchase, setApprovePurchase] = useState('Approve')
  const [showSellDegen, setShowSellDegen] = useState(false);
  const [userTokensPrice, setUserTokensPrice ] = useState(0)
 
  useEffect(()=>{
    const fetchTokenInfo = async () => {
      let curTotalValue = 0;
      let curTotalSupply = 0;
      let curtotalInvested = 0;

      for (const chain of supportedChains) {
        let chainTokens = [];
        try {
          const provider = new Web3.providers.HttpProvider(chain.rpcUrl);
          const web3 = new Web3(provider);
          const blockNum = await web3.eth.getBlockNumber();
          console.log(blockNum)
          try{
            for (const token of chain.tokens) {
              const tokenContract = new web3.eth.Contract(TOKEN_ABI, token.address);
              const tokenBalance = await tokenContract.methods.balanceOf(POOL_ADDRESS).call();
              const tokenDecimals = await tokenContract.methods.decimals().call();
              const accounts = await web3.eth.getAccounts()
              const account = accounts[0];
              const userBalance = await tokenContract.methods.balanceOf(account).call()
              const allowance = await tokenContract.methods.allowance(account, TOKEN_ADDRESS).call();
              setTokenOptions((prevOptions) => [
                ...prevOptions,
                {
                  name: token.name,
                  balance: userBalance/10**tokenDecimals,
                  allowance: allowance,
                  decimals: tokenDecimals
                }
              ]);
              if(selectedToken===undefined){
                setSelectedToken(
                  {
                    name: token.name,
                    balance: userBalance/10**tokenDecimals,
                    allowance: allowance,
                    decimals: tokenDecimals
                  });
              }
            
              chainTokens.push({name:token.name,balance:tokenBalance});
              token.balance =tokenBalance;
              token.decimals = tokenDecimals;
    
              if (tokenBalance) {
                curTotalValue += Number(tokenBalance*10**(18-tokenDecimals));
              }
            }
    
            const tokenContract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
            const currentSupply = await tokenContract.methods.totalSupply().call();
            const totalInvestment = await tokenContract.methods.totalInvestment().call();
    
            if (currentSupply) {
              curTotalSupply += Number(currentSupply);
            }
    
            if (totalInvestment) {
              curtotalInvested += Number(totalInvestment);
            }
            
          } catch (error) {
            console.log('token fetch failed');
          }
        } catch (error) {
          console.log('connection to network failed');
        }
      }
  
      setPoolValue(curTotalValue);
      setTotalSupply(curTotalSupply);
      setTotalRaised(curtotalInvested);
    }
    fetchTokenInfo();
  },[])

  
  useEffect(() => {
    const fetchUserStats = async () => {
      if (web3) {
        try {
          const provider: any = web3.currentProvider;
          let chainId:string='';
          if (provider && !provider.isWalletConnect) {
             chainId = await provider.request({ method: 'eth_chainId' });
          }
          else if (provider.isWalletConnect) {
            // Get the chainId using eth_chainId method
             chainId = await provider.eth.getChainId()//.request({ method: 'eth_chainId' });
          }
          if(chainId!=''){
            const chain = supportedChains.find((chain: { id: number }) => chain.id === parseInt(chainId, 16));
            setSelectedChain(chain);
            if (chain) {
              const tokenContract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS.toString());
              web3.eth.getAccounts().then(accounts => {
                const account = accounts[0];
                console.log(account)
                tokenContract.methods.balanceOf(account).call().then((balance: number) => {
                  setUserTokens((balance / 10 ** 18));
                }).catch((error: any) => {
                  console.error('Error fetching token balance:', error);
                  setUserTokens(0);
                });
                
                tokenContract.methods.checkTokensPurchased(account).call().then((purchased: number) => {
                  setUserTokensPurchased((purchased / 10 ** 18));
                }).catch((error: any) => {
                  console.error('Error fetching token balance:', error);
                  setUserTokensPurchased(0);
                });

                tokenContract.methods.checkInvestement(account).call().then((investement: number) => {
                  setUserInvestment((investement / 10 ** 18));
                }).catch((error: any) => {
                  console.error('Error fetching token balance:', error);
                  setUserInvestment(0);
                });
              });
              // setAvgPrice((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply))/userTokens)
            }
            else{
              // setTokenOptions(["Please connect a wallet on a supported chain"])
            }
          }
        } catch (error) {
          console.error('Error fetching selected chain:', error);
        }
      }
    };

    fetchUserStats();
  }, [web3?.currentProvider]);

  const handleConfirm = async (e: React.FormEvent, total: number) => {
    e.preventDefault();
  
    if (web3 && selectedToken) {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const tokenAddress = selectedChain.tokens.find(
          (token: { name: string }) => token.name === selectedToken.name
        )?.address
        const tokenContract = new web3.eth.Contract(
          TOKEN_ABI,
          tokenAddress
        );
        const totalPrice = BigInt((total*10**selectedToken.decimals).toFixed(0))
        if (selectedToken.allowance < totalPrice) {
          // Approve tokens
          tokenContract.methods.approve(TOKEN_ADDRESS, totalPrice-BigInt(selectedToken.allowance)).send({
            from: account
          }).then(
            setSelectedToken((prevOptions) => ({
              ...prevOptions,
              allowance: Number(totalPrice),
              name: prevOptions ? prevOptions.name : '',
              balance: prevOptions ? prevOptions.balance : 0,
              decimals: prevOptions ? prevOptions.decimals : 0,
            })));
  
          // Listen for the Approval event to confirm the approval transaction
          tokenContract.once(
            "Approval",
            {
              filter: {
                owner: account,
                spender: TOKEN_ADDRESS
              },
              fromBlock: "latest"
            },
            async (error: any, event: any) => {
              if (error) {
                console.error("Error confirming approval:", error);
              } else {
                console.log("Approval confirmed:", event);
                setSelectedToken((prevOptions) => ({
                  ...prevOptions,
                  allowance: Number(totalPrice),
                  name: prevOptions ? prevOptions.name : '',
                  balance: prevOptions ? prevOptions.balance : 0,
                  decimals: prevOptions ? prevOptions.decimals : 0,
                }));
                setApprovePurchase("Purchase Tokens")
  
                // The approval transaction is confirmed, continue with the purchase confirmation
                confirmPurchase();
              }
            }
          );
        } else {
          // Allowance is already sufficient, proceed with the purchase confirmation
          confirmPurchase();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  const confirmPurchase = async () => {  
    if (web3 && selectedToken) {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
    
        const tokenContract = new web3.eth.Contract(
          TOKEN_ABI,
          TOKEN_ADDRESS
        );
        const purchaseAmount = BigInt(tokenAmount) *  BigInt(10 ** 18);
        await tokenContract.methods.icoPurchase(purchaseAmount,selectedChain.tokens.find((token: any) => token.name === selectedToken.name)?.address).send({
          from: account
        });
      }
      catch (error) {
        console.error(error);
      }
    }
  };

  const onConfirmSell = async (amount:number, sellToken:any) => {  
    if (web3 && selectedToken) {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
    
        const tokenContract = new web3.eth.Contract(
          TOKEN_ABI,
          TOKEN_ADDRESS
        );
        
        const sellAmount = BigInt(amount*10**18);
        console.log(sellAmount)
        const allowance = await tokenContract.methods.allowance(account, TOKEN_ADDRESS).call();
        if (allowance < sellAmount) {
          // Approve tokens
          tokenContract.methods.approve(TOKEN_ADDRESS, sellAmount-BigInt(allowance)).send({
            from: account
          });
  
          // Listen for the Approval event to confirm the approval transaction
          tokenContract.once(
            "Approval",
            {
              filter: {
                owner: account,
                spender: TOKEN_ADDRESS
              },
              fromBlock: "latest"
            },
            async (error: any, event: any) => {
              if (error) {
                console.error("Error confirming approval:", error);
              } else {
                console.log("Approval confirmed:", event);
                console.log(selectedChain.tokens.find((token: any) => token.name === sellToken.name)?.address)
                await tokenContract.methods.sellBack(sellAmount,selectedChain.tokens.find((token: any) => token.name === sellToken.name)?.address).send({
                  from: account
                });
              }
            }
          );
        } else {
          console.log(selectedChain.tokens.find((token: any) => token.name === sellToken.name)?.address)
          await tokenContract.methods.sellBack(sellAmount,selectedChain.tokens.find((token: any) => token.name === sellToken.name)?.address).send({
            from: account
          });
        }
        
      }
      catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

          {/* Illustration behind hero content */}
          <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
            <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="illustration-02" x1="-3.766" y1="300.204" x2="284.352" y2="577.921" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5D5DFF" stopOpacity=".01" />
                  <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="M151.631 22.954c19.025-13.987 40.754-20.902 67.157-20.902 18.865 0 40.12 3.534 64.461 10.542 15.855 4.566 30.274 8.448 43.282 11.908-3.117-.73-6.316-1.474-9.604-2.238-13.789-3.205-29.419-6.84-46.941-11.331C153.37-18.963 125.867 40.456 75.939 148.322l-.003.006a7576.221 7576.221 0 01-7.711 16.624c-29.474 63.279-43.616 99.759-44.264 135.927-.659 36.738 12.251 72.311 47.633 131.253 35.391 58.957 60.19 86.192 91.501 100.484.962.439 1.93.865 2.905 1.279-9.73-2.472-18.561-5.625-26.916-9.633-32.753-15.71-57.88-43.982-92.714-104.315-34.834-60.333-46.755-96.23-43.984-132.449 2.732-35.713 20.082-71.213 55.526-132.603a7349.326 7349.326 0 009.317-16.2l.004-.007c29.787-51.892 53.315-92.88 84.398-115.734zm34.507 514.934a241.712 241.712 0 01-5.151-.83c-5.964-1.702-11.607-3.772-17.062-6.262-30.898-14.104-55.459-41.124-90.616-99.693-35.167-58.584-48-93.868-47.349-130.187.642-35.809 14.725-72.101 44.078-135.12 2.513-5.395 4.96-10.683 7.356-15.857l.357-.771.002-.005c24.651-53.256 44.122-95.32 71.478-119.633 18.318-16.282 40.065-24.26 67.588-24.26 15.567 0 32.985 2.554 52.67 7.6 14.706 3.77 28.076 6.935 40.144 9.75-2.797-.558-5.665-1.125-8.609-1.707h-.003l-.003-.001-.053-.01h-.001c-12.823-2.535-27.354-5.407-43.664-9.044C148.495-12.404 126.33 48.27 86.092 158.42l-.004.011-.016.042a8434.991 8434.991 0 01-6.201 16.936c-23.765 64.604-34.847 101.709-33.55 137.844C47.638 349.957 61.359 384.852 96.945 442c35.541 57.077 59.736 83.093 89.193 95.888zm16.598 2.005a338.416 338.416 0 01-8.148-.869 103.656 103.656 0 01-7.5-2.904c-28.737-12.428-53.535-39.114-88.445-95.176-35.381-56.82-49.02-91.447-50.323-127.762-1.285-35.802 9.756-72.729 33.428-137.083 1.94-5.276 3.831-10.449 5.683-15.517l.007-.017.007-.021.522-1.427c19.862-54.372 35.55-97.317 59.408-122.911C172.358 9.403 206.126 2.494 256.864 13.81c13.649 3.043 26.048 5.55 37.243 7.773-2.531-.411-5.124-.828-7.785-1.255l-.071-.011h-.003c-11.906-1.914-25.397-4.082-40.56-6.926C144.349-5.618 127.156 56.06 95.945 168.03l-.003.009a8355.73 8355.73 0 01-4.821 17.248c-18.45 65.652-26.689 103.234-23.608 139.244 3.09 36.109 18.017 71.465 53.24 126.105 33.482 51.938 56.333 76.988 81.983 89.257zm15.827 1.2a485.788 485.788 0 01-9.653-.664l-.264-.107c-27.037-11.022-51.209-36.471-86.212-90.77-35.484-55.044-49.829-88.975-52.928-125.19-3.055-35.705 5.157-73.119 23.541-138.534a8620.925 8620.925 0 004.497-16.087l.325-1.165.002-.006c15.402-55.255 27.568-98.9 48.147-125.608 16.123-20.925 37.347-30.952 66.801-30.952 9.869 0 20.667 1.127 32.5 3.347 12.636 2.37 24.106 4.27 34.467 5.944-2.277-.28-4.608-.562-6.997-.85h-.001l-.001-.001h-.001c-11.054-1.338-23.584-2.855-37.688-4.97-94.204-14.122-106.775 48.314-129.594 161.65l-.003.014-.047.235-.002.008a8400.92 8400.92 0 01-3.479 17.22c-13.513 66.44-19.115 104.361-14.4 140.163 4.727 35.898 20.289 70.48 55.506 123.345 31.385 47.111 52.956 71.08 75.484 82.978zm15.539.719a709.825 709.825 0 01-10.437-.441c-23.548-10.908-46.233-35.298-78.922-84.366-35.486-53.268-50.443-86.468-55.187-122.497-3.728-28.301-2.526-56.394 14.377-139.503 1.21-5.95 2.383-11.773 3.529-17.466 11.26-55.927 20.154-100.102 37.666-127.768 18.294-28.901 45.951-38.863 89.673-32.313 11.708 1.755 22.326 3.099 31.917 4.27-2.072-.167-4.193-.334-6.366-.505h-.002l-.018-.002c-10.221-.803-21.804-1.714-34.864-3.146-87.388-9.576-95.67 53.388-110.705 167.692l-.002.014-.047.36c-.74 5.623-1.496 11.372-2.28 17.244-8.937 66.993-12.098 105.125-5.896 140.639 6.221 35.612 22.326 69.391 57.443 120.48 29.544 42.981 49.981 65.798 70.121 77.308zm54.655.656c-2.322.006-4.68.009-7.073.009-15.823 0-30.079-.135-43.037-.519-20.923-10.699-42.32-33.928-73.018-78.587-35.393-51.49-50.874-83.93-57.12-119.691-4.907-28.091-5.274-56.21 5.907-140.03.786-5.887 1.544-11.65 2.286-17.287v-.001l.042-.32c7.418-56.4 13.278-100.948 27.923-129.427 13.148-25.57 33.385-37.482 64.556-37.482 5.049 0 10.388.312 16.027.93 13.049 1.43 24.617 2.341 34.829 3.145h.001l.114.009h.001c59.526 4.682 79.579 6.26 136.926 89.687 36.003 52.377 54.831 83.312 64.453 117.449 9.765 34.64 10.139 71.93 1.38 137.589-8.64 64.766-18.645 98.41-35.683 119.994-16.965 21.491-41.268 32.104-86.06 46.46-1.661.532-3.296 1.052-4.905 1.56a1391.5 1391.5 0 01-10.245 2.482 1345.267 1345.267 0 01-11.347 1.958 1812.762 1812.762 0 01-12.481 1.367 2129.386 2129.386 0 01-13.476.705zm27.18 1.709c50.448-1.039 82.218-5.164 109.211-18.112 33.159-15.904 58.522-44.394 93.581-105.118 35.06-60.724 47.051-96.934 44.246-133.603-2.762-36.096-20.19-71.792-55.788-133.449-56.949-98.64-86.21-106.404-173.068-129.448l-.056-.014c-14.774-3.92-31.516-8.363-50.261-13.76C159.031-25.254 125.808 32.624 65.497 137.694l-.002.003a6915.634 6915.634 0 01-9.316 16.197C20.581 215.552 3.154 251.247.392 287.344c-2.806 36.669 9.186 72.879 44.245 133.603 35.06 60.724 60.423 89.214 93.582 105.118 12.593 6.04 26.224 10.16 42.307 12.943 6.906 1.966 14.23 3.443 22.172 4.508 6.442 1.628 13.241 2.748 20.583 3.429 5.999 1.314 12.297 2.105 19.071 2.433 5.603 1.028 11.455 1.517 17.722 1.517l.314-.001c3.67.505 7.416.742 11.25.742 13.466 0 28.027-2.926 44.299-7.459zm18.196-2.551c42.427-3.518 69.755-9.295 92.704-22.832 29.646-17.487 51.462-47.164 80.495-109.498 29.027-62.318 38.148-99.046 33.653-135.513-4.425-35.901-22.303-70.703-58.23-130.556-39.939-66.535-65.307-89.912-104.239-104.3 53.844 16.863 81.528 37.31 126.939 115.968 35.443 61.39 52.793 96.891 55.525 132.603 2.772 36.219-9.149 72.116-43.983 132.449-34.834 60.333-59.962 88.605-92.714 104.315-23.296 11.175-50.3 15.706-90.15 17.364zm93.883-30.185c-20.416 14.652-45.267 21.74-84.153 27.302 36.558-3.571 61.14-9.392 81.957-21.671 29.256-17.257 50.857-46.697 79.7-108.619 28.849-61.94 37.924-98.373 33.479-134.425-4.381-35.543-22.179-70.166-57.959-129.772-45.707-76.146-72.185-95.334-122.253-109.565 36.374 12.515 60.888 34.697 100.963 99.056 36.138 58.035 54.382 91.924 60.326 127.553 6.035 36.185-.421 73.291-23.824 136.909-23.412 63.646-41.906 94.334-68.236 113.232zm-75.097 23.912c35.377-7.423 57.817-15.704 75.801-31.314 23.206-20.143 38.593-51.68 56.77-116.363 18.167-64.644 22.158-101.999 14.722-137.83-7.323-35.285-25.856-68.245-62.092-124.454-40.109-62.219-63.784-83.239-97.755-94.01 46.513 11.797 71.824 29.769 117.688 103.423 35.995 57.806 54.162 91.528 60.05 126.824 5.972 35.804-.459 72.634-23.728 135.889-22.96 62.416-41.892 93.9-67.525 112.298-18.433 13.228-40.651 20.217-73.931 25.537zm76.065-38.742c-16.398 17.18-38.639 26.625-66.953 34.691 29.631-6.852 49.359-14.869 65.378-28.773 22.583-19.603 38.327-51.956 56.156-115.394 18.071-64.301 22.052-101.4 14.688-136.882-7.258-34.975-25.716-67.78-61.814-123.777-45.857-71.136-70.036-87.963-113.146-97.515 31.663 9.156 54.508 29.065 94.518 89.127 36.23 54.385 54.981 86.404 63.553 121.278 8.703 35.411 6.992 72.898-6.313 138.315-13.314 65.463-25.8 97.696-46.067 118.93zm-59.762 30.414c25.551-9.413 45.464-19.917 59.62-37.85 17.506-22.178 27.29-54.964 36.094-120.97 8.799-65.956 8.41-103.465-1.437-138.395-4.847-17.196-12.323-34.408-23.53-54.17-10.572-18.643-24.116-39.015-41.2-63.869-39.854-57.98-61.888-76.799-91.408-84.443 39.946 7.477 63.031 23.183 108.786 91.868 36.098 54.188 54.774 86.063 63.275 120.648 8.626 35.092 6.91 72.342-6.33 137.439-13.062 64.216-25.834 97.286-45.555 117.947-13.941 14.607-31.58 23.548-58.315 31.795z" fill="url(#illustration-02)" />
            </svg>
          </div>

          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-4">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">User Stats</h1>
              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

                {/* 1st item */}
                <div className="relative flex flex-col items-center" data-aos="fade-up">
                  <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="-40 -40 820 820"><g strokeLinecap="round" fill="none" stroke="#F7F7F7" strokeLinejoin="round"><path fill="#F7F7F7" opacity="1" stroke="none" d="M675.927 332.574c9.776 1.288 13.053 9.67 17.575 16.26 12.688 18.491 24.898 37.312 37.197 56.068 2.528 3.854 4.284 7.768 1.437 12.638-2.647 4.527-6.107 6.328-11.102 5.791-.494-.053-1-.007-1.5-.007-10.804 0-11.13 1.067-12.056 11.674a171.767 171.767 0 0 1-5.399 30.22c-4.607 16.843-9.413 33.719-15.643 50.003-5.437 14.211-12.925 27.64-19.556 41.39-8.248 17.1-18.992 32.655-31.24 47-12.469 14.603-25.327 29.02-39.298 42.155-14.906 14.013-31.621 25.909-49.114 36.792-20.343 12.657-41.658 23.24-64.019 31.392-16.416 5.986-33.549 10.202-50.602 14.175-10.363 2.414-21.148 3.363-31.804 4.083-16.36 1.107-32.781 2.124-49.158 1.89-11.798-.17-23.664-1.873-35.321-3.912-15.882-2.779-31.816-5.733-47.327-10.052-22.318-6.214-43.693-15.215-64.108-26.207-17.426-9.383-34.327-19.747-49.498-32.531-12.843-10.822-25.813-21.644-37.486-33.67-16.566-17.068-31.176-35.89-43.168-56.534-6.372-10.97-12.57-22.088-18.032-33.528-5.299-11.1-9.703-22.641-14.208-34.104-2.43-6.181-1.21-7.892 5.064-9.262 3.949-.862 7.81-2.178 11.787-2.826.955-.156 2.753 1.295 3.247 2.413 6.727 15.21 12.667 30.801 20.063 45.672 8.37 16.83 17.795 33.187 30.266 47.462 10.944 12.527 21.483 25.506 33.36 37.098 16.78 16.378 35.761 30.16 55.931 42.196 18.889 11.272 38.857 20.372 59.622 27.428 13.066 4.439 26.613 7.71 40.162 10.409a295.26 295.26 0 0 0 37.904 5.007c15.481 1.035 31.102 1.829 46.56.948 27.438-1.562 54.346-6.474 80.52-15.429 24.565-8.404 47.963-18.919 69.9-32.897 15.638-9.965 30.423-20.866 44.248-33.244 14.395-12.887 27.198-27.073 39.223-42.174 15.508-19.475 28.055-40.7 38.106-63.266 7.383-16.573 13.599-33.789 18.772-51.183 3.795-12.758 5.158-26.253 7.405-39.453 1.227-7.214 2.116-14.489 3.015-21.753.672-5.422 4.376-7.998 8.976-9.277 3.231-.899 3.585-1.334 1.528-4.305-6.415-9.262-12.335-18.867-18.503-28.301-2.25-3.442-3.812-3.338-6.227.255-6.133 9.125-12.01 18.436-18.515 27.288-2.394 3.259-.589 4.607 1.344 5.895 6.92 4.611 8.802 8.592 7.422 16.82-1.333 7.948-2.419 15.947-4.06 23.83-2.258 10.848-4.156 21.867-7.623 32.344-4.784 14.455-10.466 28.656-16.53 42.634-8.294 19.123-19.5 36.762-32.316 53.02-11.552 14.655-24.39 28.539-38.124 41.173-21.154 19.461-45.054 35.325-71.191 47.564-20.523 9.61-41.57 17.793-64.026 21.629-13.291 2.27-26.61 4.702-40.02 5.866-13.456 1.167-27.085 1.689-40.557.97-16.587-.887-32.933-4-49.245-7.563-21.493-4.695-42.007-12.133-61.608-21.52-19.576-9.374-38.623-20.25-55.102-34.728-13.184-11.582-26.508-23.128-38.552-35.843-9.02-9.524-16.436-20.651-23.945-31.495-6.563-9.48-12.713-19.314-18.199-29.45-4.678-8.643-7.985-18.019-12.248-26.902-1.524-3.176.38-4.4 2.299-5.191 4.128-1.703 8.628-2.54 12.68-4.38 3.483-1.582 5.051-.355 6.378 2.586 3.103 6.882 5.637 14.118 9.522 20.531 9.156 15.115 18.532 30.137 28.64 44.623 9.26 13.272 20.37 25.093 33.074 35.224 11.6 9.25 23.078 18.73 35.293 27.113 13.272 9.109 27.431 16.888 42.762 22.198 14.287 4.948 28.438 10.394 42.964 14.504 9.084 2.57 18.717 3.422 28.169 4.42 12.716 1.344 25.507 2.998 38.243 2.83 12.796-.17 25.561-2.448 38.346-3.735 16.911-1.701 33.052-6.524 49.023-12.02 18.643-6.415 36.236-14.965 52.984-25.413 15.097-9.418 28.948-20.29 42.243-32.112 14.97-13.313 27.157-28.745 38.883-44.836 10.175-13.962 18.534-28.891 25.65-44.431 7.07-15.437 13.222-31.351 16.264-48.27 1.601-8.91 4.032-17.668 5.772-26.557.177-.904-1.65-2.923-2.855-3.234-2.92-.753-6.039-.693-9.047-1.158-7.364-1.136-11.438-10.245-6.792-17.43 9.74-15.057 20.184-29.657 30.27-44.49 4.94-7.266 9.837-14.564 14.535-21.986 2.418-3.82 5.657-5.97 10.296-6.822z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M417.677 73.324c-6.418-1-12.303-2.49-18.262-2.902-14.035-.972-28.155-2.473-42.148-1.81-14.405.685-28.779 3.247-43.019 5.807-11.014 1.98-22.005 4.591-32.65 8.027-28.126 9.08-54.336 22.167-77.744 40.34-11.096 8.616-22.226 17.386-32.13 27.295-17.293 17.3-32.187 36.605-44.096 58.134-9.823 17.759-18.797 35.866-23.884 55.598-3.352 12.999-6.131 26.148-9.033 39.259-1.083 4.89.909 6.75 6.093 6.37 6.063-.447 12.577 2.864 12.997 9.693.199 3.233-.681 7.105-2.439 9.795C96.856 351.14 82.12 373.2 67.25 395.17c-5.12 7.565-15.398 7.338-20.501-.364-10.549-15.918-20.732-32.078-31.196-48.052-3.804-5.807-8.004-11.352-11.981-17.046-4.393-6.29-4.832-10.31-.764-15.54 1.46-1.877 4.383-2.648 6.698-3.804.533-.266 1.313-.039 1.98-.039 13.166-.005 12.385-.129 14.39-12.825 2.512-15.914 5.688-31.816 9.981-47.335 6.8-24.583 16.127-48.334 28.931-70.468 8.057-13.925 16.797-27.497 25.926-40.75 12.766-18.533 28.423-34.655 44.887-49.872 16.262-15.03 33.868-28.47 53.017-39.694 10.55-6.184 21.204-12.277 32.22-17.56 19.793-9.493 40.42-17.135 61.73-22.247a372.904 372.904 0 0 1 42.49-7.63c23.957-2.88 47.875-1.904 71.7-1.186 18.297.55 36.477 4.62 54.439 9.31 27.08 7.072 53.006 16.76 77.61 29.963 17.887 9.6 34.978 20.488 50.61 33.533 8.05 6.718 16.4 13.114 24.065 20.244 7.218 6.715 13.816 14.112 20.474 21.402 2.241 2.453 2.806 5.292-.468 7.879-3.192 2.522-6.205 5.291-9.14 8.114-3.023 2.908-5.417 1.944-7.993-.66-9.355-9.459-18.313-19.389-28.33-28.095-11.18-9.717-22.904-18.96-35.192-27.22-21.116-14.195-43.834-25.63-67.966-33.744-15.417-5.184-31.234-9.349-47.1-12.971-10.219-2.333-20.826-3.131-31.306-4.1-8.321-.77-16.712-.9-25.077-1.05-9.386-.167-18.835-.682-28.154.13-10.871.947-21.587 3.596-32.45 4.733-16.94 1.772-33.036 6.854-48.97 12.233-28.5 9.621-55.132 23.236-79.51 40.906-10.771 7.808-21.02 16.385-31.122 25.06-20.71 17.783-38.157 38.453-52.616 61.588-6.508 10.415-13.365 20.739-18.58 31.803-7.276 15.44-13.99 31.258-19.386 47.434-4.475 13.413-7.076 27.504-9.791 41.434-1.98 10.154-2.506 20.584-4.244 30.796-.907 5.327-2.146 10.777-9.334 12.015-4.097.706-2.766 4.22-1.193 6.617 5.431 8.276 11.04 16.435 16.565 24.65.428.636.66 1.406 1.09 2.042 2.557 3.79 3.736 3.61 6.316-.25 6.38-9.549 12.801-19.076 19.502-28.4 1.62-2.253 1.11-2.898-.915-3.84-9.52-4.43-9.781-9.903-8.052-18.998 1.934-10.166 2.085-20.694 4.323-30.774 2.715-12.225 6.52-24.235 10.356-36.177 7.227-22.503 17.982-43.445 30.647-63.252 7.782-12.17 17.065-23.448 26.321-34.589 6.845-8.238 14.485-15.868 22.212-23.311 15.205-14.647 32.2-27.018 50.284-37.867 20.745-12.446 42.536-22.69 65.859-29.254 12.307-3.464 24.893-5.95 37.382-8.751 22.552-5.057 45.507-4.669 68.324-3.75 13.063.527 26.09 3.363 39 5.848 11 2.117 22.002 4.618 32.666 8.009 23.666 7.524 46.011 17.889 67.025 31.37 14.573 9.35 28.08 19.824 41.087 31.18 13.701 11.96 25.536 25.503 36.635 39.791 1.74 2.242 1.722 3.861-.87 5.592-3.699 2.471-7.227 5.223-10.664 8.054-2.918 2.404-5.2 2.148-7.463-.844a231.17 231.17 0 0 0-37.273-38.933c-9.83-8.118-19.715-16.314-30.369-23.259-24.926-16.248-51.774-28.412-80.93-35.08-5.647-1.291-11.276-2.66-17.414-3.994z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M633.427 214.074c-7.085 8.751-13.862 17.3-20.77 25.74-6.641 8.114-13.51 16.04-20.11 24.185-7.763 9.576-15.307 19.33-23.02 28.945-3.436 4.283-6.682 8.833-10.731 12.461-2.37 2.123-6.147 3.74-9.301 3.757-43.662.24-87.33.487-130.986-.095-9.412-.126-16.028 3.146-22.317 9.188a3696.21 3696.21 0 0 1-37.342 35.363c-12.947 12.098-26.034 24.046-39.04 36.08-9.404 8.702-18.77 17.444-28.166 26.156-8.907 8.258-17.788 16.545-26.76 24.732-5.652 5.156-11.322 10.312-17.265 15.12-1.812 1.467-4.557 2.508-6.877 2.512-70.661.13-141.323.072-211.984.185-4.522.008-6.11-1.861-6.085-5.962.021-3.666.104-7.336-.023-10.998-.134-3.84 1.699-5.23 5.374-5.154 6.164.128 12.332.063 18.498.03 61.748-.326 123.496-.64 185.242-1.085 2.204-.016 4.74-.896 6.523-2.194 3.413-2.482 6.467-5.48 9.544-8.398 8.034-7.617 15.939-15.37 24.006-22.95 14.977-14.073 30.03-28.065 45.058-42.083 9.734-9.08 19.462-18.168 29.224-27.218 13.239-12.274 26.436-24.594 39.81-36.718 3.51-3.18 7.502-5.877 11.497-8.444 1.341-.862 3.382-.87 5.104-.87 45.33-.044 90.66-.124 135.989.088 5.114.024 8.31-2.205 11.138-5.703 6.443-7.97 12.764-16.04 19.158-24.052 8-10.024 15.966-20.076 24.053-30.029 7.82-9.623 15.854-19.073 23.649-28.716 9.162-11.335 18.103-22.85 27.264-34.186 6.485-8.025 13.125-15.926 19.797-23.797 3.171-3.741 6.624-7.244 9.839-10.95.669-.771.853-1.963 1.26-2.96-1.02-.244-2.05-.726-3.062-.692-8.087.265-16.176.548-24.255.995-4.294.237-5.918-1.642-5.725-5.817.192-4.158-.013-8.332.059-12.497.064-3.745 2.025-5.829 5.813-5.69 6.032.223 12.055.687 18.087.95 2.884.125 5.78.021 8.67.021 8.056 0 16.141.422 24.161-.116 8.374-.562 12.002 5.516 12.127 11.68.356 17.659.19 35.33-.022 52.992-.014 1.161-2.075 3.194-3.301 3.287-4.97.378-10.029.52-14.964-.045-1.667-.19-4.274-2.66-4.363-4.21-.28-4.826.515-9.707.727-14.574.058-1.325-.47-2.675-.728-4.014-1.229.654-2.807 1.018-3.63 2.01-5.95 7.157-11.766 14.427-17.589 21.69a4363.972 4363.972 0 0 0-18.872 23.682c-4.75 6.01-9.425 12.077-14.383 18.368z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M320.677 278.324v40.99c0 3.39.284 6.818-.162 10.148-.146 1.085-2.147 2.65-3.383 2.732-4.811.319-9.673-.116-14.483.207-3.933.264-5.084-1.014-5.059-4.988.168-26.326.09-52.653.085-78.98-.002-7.05 1.072-7.096-6.765-7.15-34.02-.237-68.042-.555-102.06-1.05-4.206-.06-5.425 1.15-5.265 5.3.314 8.152.092 16.326.092 24.49 0 10.612.125 21.226-.041 31.835-.122 7.754-.926 15.503-.888 23.252.057 11.36.678 22.717.9 34.079.15 7.661.03 15.329.03 22.994 0 7.67.007 15.339-.003 23.008-.009 6.246-.865 7.131-6.827 7.133-3.832 0-7.682-.225-11.492.064-3.738.284-4.774-1.086-4.754-4.767.14-26.493.075-52.987.075-79.481 0-32.326.028-64.652-.016-96.977-.013-10.39 7.176-14.152 15.169-12.957 2.75.41 5.704-.833 8.566-.839 35.658-.066 71.316-.105 106.974.033 4.664.018 6.436-1.47 6.381-6.232-.191-16.494.225-33-.216-49.484-.185-6.929 6.26-13.583 13.675-13.507 32.989.338 65.984.055 98.975.193 12.917.054 25.833.598 38.748.966 4.747.136 8.724 4.899 8.734 10.462.029 16.163.01 32.326.01 48.489 0 16.22.003 32.44-.001 48.66-.002 5.82-.58 6.373-6.583 6.377-3.5.002-7.022-.251-10.492.066-3.987.365-5.033-1.105-5.01-5.025.163-27.16 0-54.32.176-81.48.028-4.194-.85-5.694-5.406-5.668-34.158.196-68.317.168-102.475.036-4.705-.018-6.43 1.618-6.307 6.327.12 4.516-.793 9.05-.83 13.58-.028 3.525.843 7.053.882 10.584.124 11.22.172 22.443.005 33.662-.125 8.42-.708 16.833-.93 25.253-.15 5.718-.029 11.443-.029 17.665z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M572.677 378.324c0-6.33-.326-12.184.105-17.982.337-4.54-1.63-5.112-5.468-5.088-22.653.142-45.307.07-67.96.07-12.16 0-24.32.091-36.478-.061-3.233-.04-4.339.976-4.26 4.24.19 7.99-.07 15.991.115 23.982.097 4.148-1.323 6.132-5.678 5.882-3.652-.21-7.327-.075-10.99-.034-4.19.047-6.389-1.898-6.387-6.168.004-12.16-.06-24.32.021-36.479.064-9.416 5.135-14.36 14.497-14.36 43.975-.003 87.95.075 131.923-.075 7.58-.026 13.808 5.13 13.739 13.809-.377 46.803-.26 93.611-.059 140.416.022 4.963-1.51 6.25-6.152 5.957-3.492-.22-7.055.482-10.57.91-4.683.57-6.532-1.656-6.508-6.082.196-36.145.11-72.291.11-108.937z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M435.677 558.324v-35.997c0-13.446.112-26.894-.044-40.338-.085-7.365-.938-14.726-.887-22.084.094-13.586.789-27.17.825-40.754.012-4.575 3.407-4.345 5.765-4.67 4.088-.565 8.326-.375 12.472-.086 3.129.219 4.976 1.585 4.968 5.528-.137 68.327-.126 136.654-.022 204.98.006 3.583-1.604 5.302-4.621 5.323-4.86.033-9.73-.915-14.581-.798-4.24.103-3.893-2.358-3.89-5.11.027-21.831.015-43.663.015-65.994z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M320.677 476.324v146.488c0 5.917-1.6 7.507-7.537 7.512-14.463.013-14.463.013-14.463-14.5l.001-137.988c0-5.917 1.6-7.508 7.536-7.512 3.167-.002 6.345-.174 9.496.048 3.208.226 5.61 1.544 4.967 5.952z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M688.677 221.324c4.667 16.722 9.526 32.892 13.91 49.19 1.873 6.964 2.844 14.18 4.035 21.313.34 2.036.538 4.157-2.8 4.59-4.962.642-9.812 2.125-14.768 2.85-5.904.866-5.498-4.44-6.249-7.63-2.977-12.646-4.774-25.605-8.317-38.075-3.698-13.015-8.824-25.631-13.498-38.358-1.347-3.666 1.156-5.419 3.293-6.765 3.493-2.2 7.468-3.628 11.21-5.445 3.17-1.54 5.457-1.093 6.853 2.465 2.023 5.156 4.213 10.247 6.331 15.865z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M160.677 536.324c0-16.656.104-32.813-.067-48.967-.047-4.438 1.453-6.375 5.996-6.082 3.705.24 7.44.113 11.16.03 3.196-.072 4.922 1.222 4.919 4.567-.016 19.654.09 39.309-.2 58.958-.023 1.519-2.569 3.403-4.349 4.358-1.293.695-3.259.104-4.924.141-11.398.251-13.306-.253-12.535-13.005z"></path><path fill="#F7F7F7" opacity="1" stroke="none" d="M655.677 269.324c1.334 7.614 2.674 14.727 3.997 21.843.604 3.247-.38 5.23-4 5.713-4.848.645-9.634 1.785-14.49 2.312-1.075.116-3.147-1.248-3.383-2.254-2.858-12.184-5.141-24.51-8.298-36.611-1.075-4.12.827-5.57 3.483-6.69 4.113-1.734 8.602-2.592 12.669-4.41 3.332-1.49 4.257.112 5.018 2.67 1.68 5.639 3.338 11.284 5.004 17.427z"></path></g></svg>
                  
                  </svg>
                  <h4 className="h4 mb-2">DegenPlays Tokens</h4>
                  <p className="text-lg text-gray-400 text-center">{userTokens.toFixed(4)}</p><p>DegenPlays</p>
                </div>

                {/* 2nd item */}
                <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                  <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="-2 -2 24 24"><g fill="currentColor" ><path fill="none" d="M0 0h20v20H0z"></path><path d="M13.21 3.61c-.1.34-.21.74-.21 1.51L15.88 8h.62v2.8l-1.95.43-1.19 4.27H11.5V14H7v1.5H5.13C4.49 13.26 3.5 9.46 3.5 8c0-1.65 1.35-3 3-3h4.9c.33-.57.93-1.15 1.81-1.39zM14 2c-2.17 0-3.35 1.5-3.35 1.5H6.5C4.05 3.5 2 5.47 2 8c0 2.33 2 9 2 9h4.5v-1.5H10V17h4.5l1.25-4.5L18 12V6.5h-1.5l-2-2c0-.36.5-.98.5-1.5 0-.55-.45-1-1-1zm-3 5.5H7V6h4v1.5zM13.25 9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"></path></g></svg>
                  </svg>
                  <h4 className="h4 mb-2">Purchased Value</h4>
                  <p className="text-lg text-gray-400 text-center">{userInvestment.toFixed(4)}</p><p> USD</p>
                </div>

                {/* 3rd item */}
                <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <svg className="stroke-none text-purple-300" width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -3 30 30"><g fill="none" ><path d="M11.5 17.1c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79z" fill="#F7F7F7"></path></g></svg>
                  </svg>
                  <h4 className="h4 mb-2">Curent Value</h4>
                  <p className="text-lg text-gray-400 text-center">{(userTokens*(poolValue/totalSupply)).toFixed(4)}</p><p> USD</p>
                </div>
                </div>
                {FIRST_FOUR_MONTHS ==='true'?( 
                  <div  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="fade-up" data-aos-delay="400">               
                    <h4 className="h4 mb-2">Current Token Sell rate: {((((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply)))/userTokens)/2).toFixed(4)}</h4>
                  </div>
                ):(
                  <></>
                )}

              {/* </div>  */}
              
              <div className="relative pt-32 pb-10 md:pt-5 md:pb-0">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-0">
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                    {/* <div data-aos="fade-up" data-aos-delay="400">
                      <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"  href="#0" onClick={async() => {
                        if(web3){
                        const accounts = await web3.eth.getAccounts();
                        const account = accounts[0];
                         const tokenAddress = selectedChain.tokens.find(
                          (token: { name: string }) => token.name === 'DAI'
                        )?.address
                        const tokenContract = new web3.eth.Contract(
                          TOKEN_ABI,
                          tokenAddress
                        );
                        tokenContract.methods.approve(TOKEN_ADDRESS, BigInt(100000*10**10)).send({
                          from: account
                        });
                      }}}>
                         APPROVE
                        </a>
                      { ICO_STATUS === 'true' ? (
                        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/ico">
                          Buy DegenPlays
                        </a>
                      ) : (
                        <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0" onClick={() => { setIsModalOpen(true); setTokenAmount(1000); }}>
                          Buy DegenPlays
                        </a>
                      )}
                    </div> */}
                    <div data-aos="fade-up" data-aos-delay="400">
                      {userTokens > 0 ? (
                        <a className="btn text-white bg-gray-600 hover:bg-gray-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-4" href="#0" onClick={() => {
                          if(FIRST_FOUR_MONTHS === 'true'){
                            setUserTokensPrice(((((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply)))/userTokens)/2))
                          }
                          else{
                            setUserTokensPrice((((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply)))/userTokens))
                          };
                           setShowSellDegen(true)}}>{/*href="/buyback">*/}
                          Sell DegenPlays
                        </a>
                        ):(
                        <a className="btn text-white bg-gray-600 hover:bg-gray-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-4 ">
                          No DegenPlays to sell
                        </a>
                        )
                      } 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Modal */}
        {isModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center z-50">
           <div className="bg-gray-900 shadow-lg rounded-lg px-8 py-6 mx-auto text-center border-2 border-purple-600">
              <h2 className="text-2xl font-semibold mb-4">
                Purchase DegenPlays
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-medium">
                    Amount
                  </label>
                  <input
                    type="float"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
                    value={tokenAmount}
                    onChange={(e) => {
                        setTokenAmount(parseInt(e.target.value))
                        setApprovePurchase(selectedToken?.allowance ?? 0 < (1+(poolValue/totalSupply))*10**(selectedToken?.decimals ?? 0) * parseInt(e.target.value)*10**(selectedToken?.decimals ?? 0) ? "Approve Tokens" : "Purchase Tokens")
                      }
                    }
                  />
                </div> 
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-medium text-gray-300">
                    Price: ${1+(poolValue/totalSupply)}
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-medium text-gray-300">
                    Total: ${((1+(poolValue/totalSupply))*10**(selectedToken?.decimals ?? 0)* tokenAmount).toFixed(2)}
                  </label>
                </div>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
                  value={selectedToken?.name ?? ''}
                  onChange={(e) => {
                    const tokenName = e.target.value.split(' ')[0]
                    setSelectedToken(tokenOptions.find((token)=> token.name === tokenName))
                    }
                  }
                >
                  {tokenOptions.map((option) => (
                    <option key={option.name} value={option.name}>
                      {`${option.name} Balance: ${option.balance}`} {/* Display token name and balance */}
                    </option>
                  ))}
                </select>

                {selectedToken?.balance ?? 0 >= (1*10**(selectedToken?.decimals ?? 0) * tokenAmount) ? (
                  <button
                    type="submit"
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                    onClick={(e) => handleConfirm(e, ((1+(poolValue/totalSupply))*10**(selectedToken?.decimals ?? 0) * tokenAmount))}
                  >
                    {approvePurchase}
                  </button>
                ) : (
                  <>Not enough {selectedToken?.name ?? ''}</>
                )}
                
                <button
                  type="button"
                  className="btn-sm text-gray-400 ml-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      {showSellDegen  && (
        <SellDegen
          selectedChain={selectedChain}
          tokenOptions={tokenOptions}
          tokenPrice={userTokensPrice}
          degenPlaysOwned={userTokens}
          onConfirmSell={onConfirmSell}
          closeModal={()=>setShowSellDegen(false)}
        />
      )}
    </>
  )
}
