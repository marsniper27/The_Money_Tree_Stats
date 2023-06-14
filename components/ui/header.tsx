'use client'
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useWeb3 } from '@/components/utils/Web3Context';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Link from 'next/link';
import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';
import { supportedChains } from '@/components/utils/config';
import ChainSelectionPopup from '@/components/utils/ChainSelectionPopup';
import ReactDOM from 'react-dom';
import '@/app/css/additional-styles/theme.css';


export default function Header() {
  const web3 = useWeb3();
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [connectedChainId, setConnectedChainId] = useState('');
  const [connectedChain, setConnectedChain] = useState<any>('');
  const [showChainSelection, setShowChainSelection] = useState(false);

  const connectWallet = async (wallet: string) => {
    try {
      let provider;
      let chainId:any;
      if (wallet === 'metamask') {
        // Connect using MetaMask provider
        if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
          await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
          provider = (window as any).ethereum;
          chainId = await provider.request({ method: 'eth_chainId' });
          setConnectedChainId(chainId);
          const web3Instance = new Web3(provider);
          const updatedAccounts = await web3Instance.eth.getAccounts();
          setAccounts(updatedAccounts);
          if (web3) {
            // Check if web3 is not null before calling setProvider
            web3.setProvider(provider);
            const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(chainId, 16));
            if (isChainSupported) {
              setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(chainId, 16)));
              // Continue with the application flow
            } else {
              // Show supported chains in a popup
              setShowChainSelection(true);
            }
          }
        } else {
          console.error('MetaMask is not installed');
        }
      } else if (wallet === 'walletconnect') {
        // Connect using WalletConnect
        const connector = new WalletConnectConnector({ rpc: { 1: supportedChains.find((chain:  { id: number}) => chain.id === 137).rpcUrl } });
        await connector.activate();
        provider = await connector.getProvider();
        chainId = await provider.chainId
        const web3Instance = new Web3(provider);
        const updatedAccounts = await web3Instance.eth.getAccounts();
        setAccounts(updatedAccounts);
        if (web3) {
          // Check if web3 is not null before calling setProvider
          web3.setProvider(provider);
          const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  chainId);
          if (isChainSupported) {
            setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === chainId));
            // Continue with the application flow
          } else {
            // Show supported chains in a popup
            setShowChainSelection(true);
          }
        }
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (selectedWallet === 'metamask') {
        // Disconnect from MetaMask provider by resetting the current provider
        if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
          (window as any).ethereum = null;
          (window as any).web3 = null;
        } else {
          // Handle case where MetaMask is not installed or not accessible
        }
      } else if (selectedWallet === 'walletconnect') {
        // Disconnect from WalletConnect by closing the connection
        const connector = new WalletConnectConnector({ rpc: { 1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' } });
        await connector.close();
      }
      if(web3){
        web3.setProvider(null);
      }
      setAccounts([]);
      setSelectedWallet('');
      setConnectedChain('');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      }
    };

    const handleChainChanged = (chainId: string) => {
      const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(chainId, 16));
      if (isChainSupported) {
        setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(chainId, 16)));
        // Continue with the application flow
      } else {
        // Show supported chains in a popup
        setShowChainSelection(true);
      }
    };

    if ((window as any).ethereum) {
      (window as any).ethereum.on('chainChanged', handleChainChanged);
    }
  
    return () => {
      if ((window as any).ethereum) {
        (window as any).ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };

    fetchAccounts();
  }, [web3]);

  const handleWalletChange =(event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWallet(event.target.value);
    connectWallet(event.target.value);
    const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(connectedChainId, 16));
    if (isChainSupported) {
      setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(connectedChainId, 16)));
      // Continue with the application flow
    } else {
      // Show supported chains in a popup
      setShowChainSelection(true);
    }
  };

  const handleChainSelection = async (selectedChain: number) => {
    setShowChainSelection(false);
    if (selectedChain) {
      try {
        if(web3){
          const provider:any = web3.currentProvider;
          if(provider && provider.isMetaMask){
            await (window as any).ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: "0x" + selectedChain.toString(16) }],
            });
         }
          else if(provider && typeof web3.currentProvider !== 'string') {
            const walletConnectProvider = web3.currentProvider as any;
            await walletConnectProvider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: selectedChain }],
            });

          }
          setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(connectedChainId, 16)));
        }
      } catch (error) {
        console.error('Error switching chain:', error);
      }
    } else {
      setAccounts([]);
      setSelectedWallet('');
      setConnectedChain('');
    }
  };

  const handleCloseModal = () => {
    setShowChainSelection(false);
    setAccounts([]);
    setSelectedWallet('');
    setConnectedChain('');
  };
  
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Cruip">
                <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/howItWorks" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/ico" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    ICO
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/buyback" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    BuyBacks
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Disclaimer
                  </Link>
                </li>
              </ul>

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {accounts.length > 0 ? (
                  <div>
                    <p className="md:pt-2">Account: {accounts[0].substring(0, 7)}</p>
                    <p>Chain: {connectedChain?.name}</p>
                    <div data-aos="fade-up" data-aos-delay="400">
                      <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={disconnectWallet}>Disconnect</a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Dropdown title="Connect Wallet">
                      <div data-aos="fade-up" data-aos-delay="400">
                        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => connectWallet("metamask")}>MetaMask</a>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="400">
                        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => connectWallet("walletconnect")}>WalletConnect</a>
                      </div>
                    </Dropdown>
                  </div>
                )}
                {/* <li>
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={disconnectWallet}>Disconnect</a>
                </li> */}
              </ul>
            </nav>

            {/* Mobile menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
      {showChainSelection  && (
        <ChainSelectionPopup
          supportedChains={supportedChains}
          onSelectChain={handleChainSelection}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
}
