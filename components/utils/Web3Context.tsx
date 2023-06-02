import React, { createContext, useContext } from 'react';
import Web3 from 'web3';

// Create the context
export const Web3Context = createContext<Web3 | null>(null);

// Create a custom hook to access the context
export const useWeb3 = (): Web3 | null => useContext(Web3Context);