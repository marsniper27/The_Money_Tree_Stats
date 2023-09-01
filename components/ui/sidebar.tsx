// Sidebar.js
import React, {useState, useRef, useEffect} from 'react';

interface SidebarProps {
  isOpen: boolean;
  mobile: boolean;
  onClose: () => void;
  numInputs:number;
  setNumInputs:React.Dispatch<React.SetStateAction<number>>;
  inputValues:Array<string>;
  setInputValues:React.Dispatch<React.SetStateAction<Array<string>>>;
  trees: Array<{ top: string; left: string; center: string; right: string }>; // Replace TreeType with the actual type of your tree objects33
  setTrees: React.Dispatch<React.SetStateAction<Array<{ top: string; left: string; center: string; right: string }>>>; // Replace TreeType with the actual type of your tree objects
  fetchedCookies:boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose,mobile,trees,setTrees,inputValues,setInputValues,setNumInputs,numInputs,fetchedCookies }) => {
  const numInputsRef = useRef<HTMLInputElement | null>(null);

  const handleNumInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setNumInputs(value);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => { 
    console.log('handleInputBlur called');
    const value = parseInt(event.target.value);
    const newInputValues = Array.from({ length: value }, (_, i) => {if(inputValues.length-1 < i){return(`Wallet ${i + 1}`)} else{return(inputValues[i])}})
    setInputValues((prevInputValues) => {
      const newInputValues = Array.from({ length: value }, (_, i) => {
        return prevInputValues[i] || `Wallet ${i + 1}`;
      });
      return newInputValues;
    });

    const usedWallets = (trees.length*3)+1;
    const newTreeCount = Math.floor((value-1)/3)-trees.length;
    var newTrees = trees;

    if(value > usedWallets){
      var currentTrees = trees;
      if(newTreeCount > 0){
        var offset = 0
          setTrees((prevTrees) => {
            var newTrees:any = [];
            for(var x = 0; x < newTreeCount; x++){
              newTrees = [...newTrees,{
                top: newInputValues[trees.length+x],
                left: newInputValues[usedWallets + offset],
                center: newInputValues[usedWallets + offset + 1],
                right: newInputValues[usedWallets + offset + 2],
              }];
              offset+=3;
            }
            return [...prevTrees, ...newTrees];
          });
        }
    }
    else if(value < usedWallets){
      var currentTrees = trees;
      if(newTreeCount < 0){
          currentTrees = trees.slice(0,currentTrees.length+(newTreeCount));
        setTrees(currentTrees);
      }
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // handleNumInputChange(event.currentTarget.value);
      event.currentTarget.blur(); // This will blur the input and trigger the same logic as onBlur
    }
  };

  const handleTextInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = value;
      return newInputValues;
    });
    for(var treeCount = 0;treeCount < trees.length; treeCount++){
      var newTrees = trees.map(x => (x.top === inputValues[index] ? { ...x, top: value } : x));
      newTrees = newTrees.map(x => (x.left === inputValues[index] ? { ...x, left: value } : x));
      newTrees = newTrees.map(x => (x.right === inputValues[index] ? { ...x, right: value } : x));
      newTrees = newTrees.map(x => (x.center === inputValues[index] ? { ...x, center: value } : x));
      setTrees(newTrees);
    }
  };

  useEffect(() => {
    if (fetchedCookies && numInputsRef.current) {
      numInputsRef.current.focus()
      setTimeout(() => {
        if (numInputsRef.current){
          numInputsRef.current.blur();
        }
      }, 5);
    }
  }, [fetchedCookies]);
  
  return (
    <div>
      {mobile===false ?(
        <div className="sidebar-desktop">
          <h2 className="text-lg font-semibold mb-2">Not Mobile</h2>
          <h2 className="text-lg font-semibold mb-2">Number of Wallets</h2>
          <input
            ref={numInputsRef}
            type="number"
            className="w-full border border-gray-300 rounded px-2 py-1 mb-2 dark-font-color"
            placeholder="Enter a number"
            value={numInputs}
            min = {4}
            onChange={handleNumInputChange}
            onBlur={(event) => {
              console.log('Blur event triggered.');
              handleInputBlur(event);
            }}
            onKeyDown={(event) => handleKeyDown(event)}
          />
          <h2 className="text-lg font-semibold mb-2">Wallet address</h2>
          {inputValues.map((value, index) => (
            <input
              key={index}
              type="text"
              className="w-full border border-gray-300 rounded px-2 py-1 mb-2 dark-font-color"
              placeholder={`Wallet ${index + 1}`}
              value={value}
              onChange={(event) => handleTextInputChange(index, event.target.value)}
            />
          ))}
        </div>
      ):(
        <div>
          <div className={`sidebar ${isOpen && mobile ? 'open' : ''}`}>
            <h2 className="text-lg font-semibold mb-2">Mobile</h2>
            <h2 className="text-lg font-semibold mb-2">Number of Wallets</h2>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-2 py-1 mb-2 dark-font-color"
              placeholder="Enter a number"
              value={numInputs}
              min = {4}
              onChange={handleNumInputChange}
              onBlur={(event) => handleInputBlur(event)}
              onKeyDown={(event) => handleKeyDown(event)}
            />
            <h2 className="text-lg font-semibold mb-2">Wallet address</h2>
            {inputValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-2 dark-font-color"
                placeholder={`Wallet ${index + 1}`}
                value={value}
                onChange={(event) => handleTextInputChange(index, event.target.value)}
              />
            ))}
          </div>
          {isOpen && mobile && <div className="sidebar-overlay" onClick={onClose}></div>}
        </div>
      )}
    </div>
  );
}

export default Sidebar;