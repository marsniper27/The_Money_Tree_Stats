import React from 'react';
import { useState, useEffect} from 'react';

interface SellDegenProps {
    selectedChain:any;
    tokenOptions:any[];
    tokenPrice:number;
    degenPlaysOwned:number;
    onConfirmSell: (amount: number, token:any) => void;
    closeModal: () => void;
}

const SellDegen: React.FC<SellDegenProps> = ({
    selectedChain,
    tokenOptions,
    tokenPrice,
    degenPlaysOwned,
    onConfirmSell,
  closeModal,
}) => {
  const handleConfirm = (amount: number, token:any) => {
    onConfirmSell(amount, token);
    closeModal();
  };
  
  const [selectedToken, setSelectedToken ] = useState<{ name: string; balance: number; allowance: number; decimals: number } | undefined>();
  const [tokenAmount, setTokenAmount ] = useState<number>(0);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-gray-900 shadow-lg rounded-lg px-8 py-6 mx-auto text-center border-2 border-purple-600">
      <h3 className="text-lg font-semibold mb-2 text-gray-300">Sell DegenPlays</h3>
        <label className="block mb-2 text-lg font-medium text-gray-300">
          Tokens Owned: {degenPlaysOwned.toFixed(4)}
        </label>
        <label className="block mb-2 text-lg font-medium text-gray-300">
          Price: ${tokenPrice.toFixed(6)}
        </label>
        <div className="flex justify-between mb-1">
          <label className="block mb-0 text-lg font-medium">
            Amount
          </label>
          <label className="mb-0 text-sm font-medium hover:bg-purple-700" onClick={()=> setTokenAmount(degenPlaysOwned)}>
            Max
          </label>
        </div>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
          value={tokenAmount}
          min={0}
          max={degenPlaysOwned}
          onChange={(e) => {
            setTokenAmount(e.target.value)
          }}
        />
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-300">
            Total: ${((tokenPrice * (tokenAmount*10**18))/10**18).toFixed(6)}
          </label>
        </div>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
          value={selectedToken?.name ?? ''}
          onChange={(e) => {
            const tokenName = e.target.value.split(' ')[0]
            setSelectedToken(selectedChain.tokens.find((token:any)=> token.name === tokenName))
          }}
        >
          {selectedChain.tokens.map((option:any) => (
            <option key={option.name} value={option.name}>
              {`${option.name} Balance: ${option.balance/10**option.decimals}`} 
            </option>
          ))}
        </select>
  
        {selectedToken?.balance ?? 0 >= ((1*10**(selectedToken?.decimals ?? 0) * (tokenAmount*10**18))/10**18) ? (
          <button
            type="submit"
            className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
            onClick={(e) => handleConfirm(tokenAmount,selectedToken)}
          >
            Sell Tokens
          </button>
        ) : (
          <>Not enough {selectedToken?.name ?? ''}</>
        )}
              
        <button
          type="button"
          className="btn-sm text-gray-400 ml-2"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SellDegen;
