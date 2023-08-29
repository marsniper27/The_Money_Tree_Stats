'use client'
import React from 'react';
import CopyToClipboardDiv from './utils/copyToClipboard'; // Import the CopyToClipboard component

interface TreeProps {
  top: string;
  left: string;
  center: string;
  right: string;
}

const TreeDisplay: React.FC<TreeProps> = ({ top, left, center, right }) => {
  return (
    <div className="tree-container">
      <div className="tree-row">
        <div className="tree-node-box">
        {/* Use the CopyToClipboardDiv component for the top node */}
            <CopyToClipboardDiv text={top} />
        </div>
      </div>
      <div className="tree-row">
        <div className="tree-connector"></div>
        <div className="tree-node-box">
          <h4 className="tree-node h4">{left}</h4>
        </div>
        <div className="tree-connector"></div>
        <div className="tree-node-box">
          <h4 className="tree-node h4">{center}</h4>
        </div>
        <div className="tree-connector"></div>
        <div className="tree-node-box">
          <h4 className="tree-node h4">{right}</h4>
        </div>
        <div className="tree-connector"></div>
      </div>
    </div>
  );
};

export default TreeDisplay;
