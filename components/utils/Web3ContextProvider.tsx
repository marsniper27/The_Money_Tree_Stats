'use client'
import React, { createContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import { Web3Context } from '@/components/utils/Web3Context';

interface Web3ContextProviderProps {
    children: React.ReactNode;
  }
  
  export const Web3ContextProvider: React.FC<Web3ContextProviderProps> = ({ children }) => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
  
    useEffect(() => {
      const initializeWeb3 = async () => {
        try {
          if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
            await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
            const provider = (window as any).ethereum;
            const web3Instance = new Web3(provider);
            setWeb3(web3Instance);
          }
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      };
  
      initializeWeb3();
    }, []);
  
    return (
      <Web3Context.Provider value={web3}>
        {children}
      </Web3Context.Provider>
    );
  };
