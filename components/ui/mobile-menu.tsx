'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Web3 from 'web3';
import { useWeb3 } from '@/components/utils/Web3Context';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { supportedChains } from '@/components/utils/config';
import ChainSelectionPopup from '@/components/utils/ChainSelectionPopup';
import Dropdown from '@/components/utils/dropdown';
import { Web3Button } from '@web3modal/react'


export default function MobileMenu() {
  const web3 = useWeb3();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false) 
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [connectedChainId, setConnectedChainId] = useState('');
  const [connectedChain, setConnectedChain] = useState<any>('');
  const [showChainSelection, setShowChainSelection] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })



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
        } else {
          console.error('MetaMask is not installed');
        }
      } else if (wallet === 'walletconnect') {
        // Connect using WalletConnect
        const connector = new WalletConnectConnector({ rpc: { 1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' } });
        await connector.activate();
        provider = connector.getProvider();
      }

      if (provider) {
        const web3Instance = new Web3(provider);
        const updatedAccounts = await web3Instance.eth.getAccounts();
        setAccounts(updatedAccounts);
        if (web3) {
          // Check if web3 is not null before calling setProvider
          web3.setProvider(provider);
          // const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(chainId, 16));
          // if (isChainSupported) {
          //   setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(connectedChainId, 16)));
          //   // Continue with the application flow
          // } else {
          //   // Show supported chains in a popup
          //   setShowChainSelection(true);
          // }
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
      // const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(chainId, 16));
      // if (isChainSupported) {
      //   setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(chainId, 16)));
      //   // Continue with the application flow
      // } else {
      //   // Show supported chains in a popup
      //   setShowChainSelection(true);
      // }
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
    // const isChainSupported = supportedChains.some((chain: { id: number }) => chain.id ===  parseInt(connectedChainId, 16));
    // if (isChainSupported) {
    //   setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(connectedChainId, 16)));
    //   // Continue with the application flow
    // } else {
    //   // Show supported chains in a popup
    //   setShowChainSelection(true);
    // }
  };

  const handleChainSelection = async (selectedChain: number) => {
    setShowChainSelection(false);
    if (selectedChain) {
      try {
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x" + selectedChain.toString(16) }],
        });
        // setConnectedChain(supportedChains.find((chain:  { id: number}) => chain.id === parseInt(connectedChainId, 16)));
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
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link href="/" className="flex text-gray-300 hover:text-gray-200 py-2" onClick={() => setMobileNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex text-gray-300 hover:text-gray-200 py-2" onClick={() => setMobileNavOpen(false)}>
              User Info
            </Link>
          </li>
          <li>
            <Link href="/treeGenerator" className="flex text-gray-300 hover:text-gray-200 py-2" onClick={() => setMobileNavOpen(false)}>
              Tree Generator
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="flex text-gray-300 hover:text-gray-200 py-2" onClick={() => setMobileNavOpen(false)}>
              Disclaimer
            </Link>
          </li>
          {accounts.length > 0 ? (
            <div>
              <p className="md:pt-2">Connected account: {accounts[0].substring(0, 7)}</p>
              <p>Connected chain: {connectedChain?.name}</p>
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={disconnectWallet}>Disconnect</a>
              </div>
            </div>
             ) : (
              <div>
              {/* <li data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => connectWallet("metamask")}>MetaMask</a>
              </li> */}
              <li data-aos="fade-up" data-aos-delay="400">
                {/* <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => connectWallet("walletconnect")}>WalletConnect</a> */}
                <Web3Button />
              </li> 
            </div>
             )}
          </ul>
      </nav>
      {/* {showChainSelection  && (
        <ChainSelectionPopup
          // supportedChains={supportedChains}
          onSelectChain={handleChainSelection}
          closeModal={handleCloseModal}
        />
      )} */}
    </div>
  )
}
