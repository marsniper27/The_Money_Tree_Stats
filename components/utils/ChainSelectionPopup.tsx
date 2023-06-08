import React from 'react';

interface ChainSelectionPopupProps {
  supportedChains: { id: number; name: string; rpcUrl: string }[];
  onSelectChain: (chainId: number) => void;
  closeModal: () => void;
}

const ChainSelectionPopup: React.FC<ChainSelectionPopupProps> = ({
  supportedChains,
  onSelectChain,
  closeModal,
}) => {
  const handleChainSelect = (chainId: number) => {
    onSelectChain(chainId);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6">
        <h3 className="text-lg font-semibold mb-4">Unsupported Chain</h3>
        <p>Please select a supported chain:</p>
        <ul className="mt-4 space-y-2">
          {supportedChains.map((chain) => (
            <li
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-2 py-2 px-4 rounded"
              key={chain.id}
              onClick={() => handleChainSelect(chain.id)}
            >
              {chain.name}
            </li>
          ))}
        </ul>
        <button
          className="btn text-gray-500 hover:text-gray-700 mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChainSelectionPopup;
