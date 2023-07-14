'use client'
import { useState,useEffect } from 'react';
import { supportedChains, TOKEN_ABI,TOKEN_ADDRESS,POOL_ADDRESS} from '@/components/utils/config';
import { useWeb3 } from '@/components/utils/Web3Context';
import Web3 from 'web3';

export default function Stats() {
  const web3 = useWeb3();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalSupply, setTotalSupply ] = useState(0)
  const [totalRaised, setTotalRaised ] = useState(0)
  const [poolValue, setPoolValue ] = useState(0)
  const [userTokens, setUserTokens ] = useState(0)
  const [userTokensPurchased, setUserTokensPurchased ] = useState(0)
  const [userInvestment, setUserInvestment ] = useState(0)
  const [userAvgPrice, setAvgPrice ] = useState(0)
  const [tokenAmount, setTokenAmount ] = useState(0)
  const [selectedToken, setSelectedToken ] = useState<any>('')
  const [selectedChain, setSelectedChain ] = useState<any>('')
  const [tokenOptions, setTokenOptions] = useState<any[]>([]);

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
          for (const token of chain.tokens) {
            const tokenContract = new web3.eth.Contract(TOKEN_ABI, token.address);
            const tokenBalance = await tokenContract.methods.balanceOf(POOL_ADDRESS).call();
            const tokenDecimals = await tokenContract.methods.decimals().call();
            chainTokens.push({name:token.name,balance:tokenBalance});
  
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
                setAvgPrice(((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply)))/userTokens)
              });
              setAvgPrice(((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply)))/userTokens)
              // setAvgPrice((userInvestment)+((userTokens-userTokensPurchased)*(poolValue/totalSupply))/userTokens)
            }
            else{
              setTokenOptions(["Please connect a wallet on a supported chain"])
            }
          }
        } catch (error) {
          console.error('Error fetching selected chain:', error);
        }
      }
    };

    fetchUserStats();
  }, [web3?.currentProvider]);

                // setAvgPrice((userInvestment)/userTokens)
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">Current DegenPlays Value</h1>
            <p className="text-xl text-gray-400">${(poolValue/totalSupply).toFixed(4)} USD</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">{(totalSupply/10**18).toFixed(4)}</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays Sold</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">${(totalRaised/10**18).toFixed(4)} USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Funds Raised</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">${(poolValue/10**18).toFixed(4)} USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8 md:pt-8">
            <h1 className="h2 mb-4">How DegenPlays calculates your price:</h1>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">DegenPlays owned</h1>
            <p className="text-xl text-gray-400">{(userTokens).toFixed(4)} DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">DegenPlays purchased through us</h1>
            <p className="text-xl text-gray-400">{(userTokensPurchased).toFixed(4)} DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">DegenPlays purchased through third-party</h1>
            <p className="text-xl text-gray-400">{((userTokens-userTokensPurchased)/10**18).toFixed(4)} DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">Average Price paid</h1>
            <p className="text-xl text-gray-400">${userAvgPrice} USD</p>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(((DegenPlays from us)*(purchase price))+((Degens from 3rd-party)*((pool value)/DegenPlays sold)))/(DegenPlays owned)</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">Buyback rate in first 4 months (if token value is under $1)</h1>
            <p className="text-xl text-gray-400">${userAvgPrice/2} USD</p>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(Average paid)/2</p>
            <p className="text-xl text-gray-400">Total value ${((userAvgPrice/2)*userTokens).toFixed(4)} USD</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">Buyback rate after first 4 months</h1>
            <p className="text-xl text-gray-400">${poolValue/totalSupply} USD</p>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(Current pool value)/(DegenPlays sold)</p>
            <p className="text-xl text-gray-400">Total value ${((poolValue/totalSupply)*userTokens).toFixed(4)} USD</p>
          </div>
        </div>
      </div>
    </section>
  )
}
