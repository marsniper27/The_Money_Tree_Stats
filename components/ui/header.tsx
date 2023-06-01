'use client'

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
// import web3 from '@/components/utils/web3';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

export default function Header() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState('');

  const connectWallet = async (wallet: string) => {
    try {
      let provider;
      if (wallet === 'metamask') {
        // Connect using MetaMask provider
        if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
          await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
          provider = (window as any).ethereum;
        } else {
          // Handle case where MetaMask is not installed or not accessible
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
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    };

    fetchAccounts();
  }, []);

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWallet(event.target.value);
    connectWallet(event.target.value);
  };

  return (
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
                <Link href="/features" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Features
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
              </li><li>
                <Link href="/buyback" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  BuyBacks
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  About us
                </Link>
              </li> */}
              {/* 1st level: hover */}
              {/* <Dropdown title="Support"> */}
                {/* 2nd level: hover */}
                {/* <li>
                  <Link href="/contact" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/help/frequently-asked-questions" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    404
                  </Link>
                </li>
              </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {accounts.length > 0 ? (
                <div>
                  <p>Connected account: {accounts[0].substring(0,7)}</p>
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
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
