'use client'
import React, { useState,ChangeEvent  } from 'react';

export default function Stats() {
  const [tokens, setTokens] = useState(1000);
  const [tokensFromUs, setTokensFromUs] = useState(1000);
  const [token3rd, setToken3rd] = useState(0);
  const [investedValue, setInvestedValue] = useState(1000);
  const [poolValue, setPoolValue] = useState(120000);
  const [tokensSold, setTokensSold] = useState(500000);

  const [tokenValue, setTokenValue] = useState(1);
  const [investedValue3rd, setInvestedValue3rd] = useState(0);
  const [tokenValue3rd, setTokenValue3rd] = useState(0);

  const [totalInvest, setTotalInvest] = useState(1000);
  const [avgTokenValue, setAvgTokenValue] = useState(0.5);

  const handlePoolInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setPoolValue(value);
    setInvestedValue3rd(value/tokensSold)
    setTotalInvest((value/tokensSold)*token3rd + investedValue)
    setAvgTokenValue(((((value/tokensSold)*token3rd) + investedValue)/tokens)/2)
  };

  const handleTokensInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTokens(value);
    if(tokensFromUs>value){
      setTokensFromUs(value)
      setToken3rd(0)
      setTotalInvest((investedValue))
      setAvgTokenValue(((investedValue)/tokens)/2)
    }
    else{
      setToken3rd(value-tokensFromUs)
      setTotalInvest((poolValue/tokensSold)*(value-tokensFromUs) + investedValue)
      setAvgTokenValue((((poolValue/tokensSold)*(value-tokensFromUs) + investedValue)/tokens)/2)
    }
  };

  const handletokensFromUsInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTokensFromUs(value);
    setTokenValue(investedValue/value)
    if(value>tokens){
      setTokens(value)
      setToken3rd(0)
      setTotalInvest((investedValue))
      setAvgTokenValue(((investedValue)/tokens)/2)
    }
    else{
      setToken3rd(tokens-value)
      setTotalInvest((poolValue/tokensSold)*(tokens-value) + investedValue)
      setAvgTokenValue((((poolValue/tokensSold)*(tokens-value) + investedValue)/tokens)/2)
    }
  };

  const handleInvestedValueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setInvestedValue(value);
    setTokenValue(value/tokensFromUs);
    setTotalInvest(((poolValue/tokensSold)*token3rd) + (value))
    setAvgTokenValue(((((poolValue/tokensSold)*token3rd) + (value))/tokens)/2)
  };

  const handleTokensSoldInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTokensSold(value);
    setInvestedValue3rd(poolValue/value);
    setTotalInvest((poolValue/value)*token3rd + (investedValue))
    setAvgTokenValue((((poolValue/value)*token3rd + (investedValue))/tokens)/2)
  };
  // const investedValue = (1000 * 1) + (0 * (poolValue / 500000));
  // const tokenValue = (investedValue / 1000) / 2;
  // const investedValue3rd = (1000 * 1) + (500 * (poolValue / 500000));
  // const tokenValue3rd = (investedValue3rd / (1000 + 500)) / 2;

  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pb-12 md:pb-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h2 mb-4">Example if selling in first 4 months</h1>
          {/* <p className="text-xl text-gray-400">1000 tokens purchased in ICO</p> */}
        </div>

        <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
          {/* 1st item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={tokens}
                onChange={handleTokensInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/></div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays owned</div>
          </div>
          {/* 2nd item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={tokensFromUs}
                onChange={handletokensFromUsInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/></div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from us</div>
          </div>
          {/* 3rd item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">{token3rd}</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from 3rd-party</div>
          </div>
          {/* 4th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={investedValue}
                onChange={handleInvestedValueInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/></div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">purchase value from us</div>
          </div>
          {/* 5th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={poolValue}
                onChange={handlePoolInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/>USD</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
          </div>
          {/* 6th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={tokensSold}
                onChange={handleTokensSoldInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/></div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPLays Sold</div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-lg mb-4">Invested Value: ({tokensFromUs} * ${tokenValue}) + ({token3rd} * (${poolValue}/{tokensSold})) = ${totalInvest.toFixed(2)}</h1>
          <h1 className="text-lg mb-4">Token Value: (${totalInvest.toFixed(2)}/{tokens}) / 2 = ${(avgTokenValue).toFixed(2)} Per DegenPlays</h1>
        </div>
      </div>
    </div>
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20"> */}

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Example if selling in first 4 months with 3rd party purchase</h1>
            <p className="text-xl text-gray-400">1000 tokens purchased in ICO and 500 tokens purchased form 3rd-party</p>
          </div> */}

          {/* <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center"> */}
            {/* 1st item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1500</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays owned</div>
            </div> */}
            {/* 2nd item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from us</div>
            </div> */}
            {/* 3rd item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from 3rd-party</div>
            </div> */}
            {/* 4th item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">$1 USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">purchse price from us</div>
            </div> */}
            {/* 5th item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
                <input
                  type="text"
                  value={poolValue}
                  onChange={handlePoolInputChange}
                  className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/>USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
            </div> */}
            {/* 6th item */}
            {/* <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500,000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPLays Sold</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Invested Value: ({1000} * $1) + ({500} * (${poolValue}/500,000)) = ${investedValue3rd.toFixed(2)}</h1>
            <h1 className="h2 mb-4">Token Value: (${investedValue3rd.toFixed(2)}/1500) / 2 = ${tokenValue3rd.toFixed(4)} Per DegenPlays</h1>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  )
}
