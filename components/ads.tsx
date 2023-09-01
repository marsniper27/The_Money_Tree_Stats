'use client'
import React from 'react';
import Image from 'next/image';

import QPad from '@/public/videos/QP_5.gif';
import CopyToClipboardDiv from './utils/copyToClipboard';

export default function Ads() {
  return (
    <div className="relative flex flex-col items-center w-full overflow-wrap break-word" >
      <h4 className="h4 mb-2 w-full break-word">Donation Address: </h4>
      <CopyToClipboardDiv text={"0xFBd8d20eF1999f52E799EFC1D77631B995a5dBB3"} />
      {/* <p>These are just here for now they will not be on live site!!</p> */}
      <a href="https://quopi.ai/invite/Mars" target="_blank" rel="noopener noreferrer">
        <Image src={QPad} alt="Clickable GIF" />
      </a>
      {/* <div data-aos="fade-up" data-aos-delay="400">
        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://amsys.io/"  target="_blank" rel="noopener noreferrer">AMSYS enter 7D659B50 to access form</a>
      </div> */}
    </div>
  );
}
