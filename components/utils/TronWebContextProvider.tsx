'use client'
import React, { createContext, useEffect, useState } from 'react';

import TronWeb from '@sterliakov/tstron';
// import Web3 from 'web3';
import { TronWebContext } from '@/components/utils/TronWebContext';

interface TronWebContextProviderProps {
    children: React.ReactNode;
  }
  
  export const TronWebContextProvider: React.FC<TronWebContextProviderProps> = ({ children }) => {
    const [tronWeb, setTronWeb] = useState<TronWeb | null>(null);
  
    useEffect(() => {
      const initializeTronWeb = async () => {
        try {
          if (typeof window !== 'undefined' && typeof (window as any).tronWeb  !== 'undefined') {
            await (window as any).tronWeb.request({ method: 'eth_requestAccounts' });
            const provider = (window as any).tronWeb;
            const tronWebInstance = new TronWeb(provider);
            setTronWeb(tronWebInstance);
          }
        } catch (error) {
          console.error('Error initializing tronWeb:', error);
        }
      };
  
      initializeTronWeb();
    }, []);
  
    return (
      <TronWebContext.Provider value={tronWeb}>
        {children}
      </TronWebContext.Provider>
    );
  };
