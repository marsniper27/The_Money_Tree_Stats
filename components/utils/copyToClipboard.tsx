import React, { useState } from 'react';

interface CopyToClipboardDivProps {
  text: string;
}

const CopyToClipboardDiv: React.FC<CopyToClipboardDivProps> = ({ text }) => { 
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = "https://themoneytree.io/"+text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Clear the "copied" state after 2 seconds
  };


  return (
    <div className="h4 mb-2 w-full" style={{ cursor: 'pointer' }}>
      <div onClick={copyToClipboard}>
        <h4 className="h4 mb-2">Click to Copy: {text}</h4>
      </div>
      {copied && <div>Copied to clipboard!</div>}
    </div>
  );
};

export default CopyToClipboardDiv;
