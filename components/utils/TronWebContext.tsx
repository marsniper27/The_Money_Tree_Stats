import React, { createContext, useContext } from 'react';
// import TronWeb  from '@/js/tronweb.js';
// const TronWeb = require('tronweb');
import TronWeb from "@sterliakov/tstron";

// Create the context
export const TronWebContext = createContext<TronWeb | null>(null);

// Create a custom hook to access the context
export const useTronWeb = (): TronWeb | null => useContext(TronWebContext);