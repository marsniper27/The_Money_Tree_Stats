import React from 'react';
import Image from 'next/image';

import QPad from '@/public/videos/QP_5.gif';

export default function Ads() {
  return (
    <div className="relative flex flex-col items-center" >
      <p>These are just here for now they will not be on live site!!</p>
      <a href="https://quopi.ai/invite/Mars" target="_blank" rel="noopener noreferrer">
        <Image src={QPad} alt="Clickable GIF" />
      </a>
      <div data-aos="fade-up" data-aos-delay="400">
        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://cryptoprogram.me?referralCode=7D659B50"  target="_blank" rel="noopener noreferrer">Crypto Program</a>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://qliothon.com/#/?code=eDBaWt"  target="_blank" rel="noopener noreferrer">Qliothon</a>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://startifytrade.com/ref/PNOM1DXWHL407"  target="_blank" rel="noopener noreferrer">Startify</a>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://alligatorcore.ai/register/144yXWkVMiMSE8"  target="_blank" rel="noopener noreferrer">aligator core</a>
      </div>
      <div>
        <a href="https://poradex.com/ref/marsniper27" target="_blank"><img src="https://poradex.com/assets/banners/728.gif"></a>
      </div>
    </div>
  );
}
