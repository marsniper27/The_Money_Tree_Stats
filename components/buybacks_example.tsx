'use client'
import React, { useState,ChangeEvent  } from 'react';

export default function Stats() {
  const [poolValue, setPoolValue] = useState(120000);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setPoolValue(value);
  };

  const investedValue = (1000 * 1) + (0 * (poolValue / 500000));
  const tokenValue = (investedValue / 1000) / 2;
  const investedValue3rd = (1000 * 1) + (500 * (poolValue / 500000));
  const tokenValue3rd = (investedValue3rd / (1000 + 500)) / 2;

  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pb-12 md:pb-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h2 mb-4">Example if selling in first 4 months</h1>
          <p className="text-xl text-gray-400">1000 tokens purchased in ICO</p>
        </div>

        <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
          {/* 1st item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1000</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays owned</div>
          </div>
          {/* 2nd item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1000</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from us</div>
          </div>
          {/* 3rd item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">0</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from 3rd-party</div>
          </div>
          {/* 4th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">$1 USD</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">purchse price from us</div>
          </div>
          {/* 5th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
              <input
                type="text"
                value={poolValue}
                onChange={handleInputChange}
                className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/>USD</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
          </div>
          {/* 6th item */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500,000</div>
            <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPLays Sold</div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h2 mb-4">Invested Value: ({1000} * $1) + (0 * (${poolValue}/500,000)) = ${investedValue.toFixed(2)}</h1>
          <h1 className="h2 mb-4">Token Value: (${investedValue.toFixed(2)}/1000) / 2 = ${tokenValue.toFixed(2)} Per DegenPlays</h1>
        </div>
      </div>
    </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Example if selling in first 4 months with 3rd party purchase</h1>
            <p className="text-xl text-gray-400">1000 tokens purchased in ICO and 500 tokens purchased form 3rd-party</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1500</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays owned</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from us</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays from 3rd-party</div>
            </div>
            {/* 4th item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">$1 USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">purchse price from us</div>
            </div>
            {/* 5th item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">
                <input
                  type="text"
                  value={poolValue}
                  onChange={handleInputChange}
                  className="w-28 text-purple-600 font-bold leading-tight tracking-tighter outline-none border-b-2 border-purple-600"/>USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
            </div>
            {/* 6th item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500,000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPLays Sold</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Invested Value: ({1000} * $1) + ({500} * (${poolValue}/500,000)) = ${investedValue3rd.toFixed(2)}</h1>
            <h1 className="h2 mb-4">Token Value: (${investedValue3rd.toFixed(2)}/1500) / 2 = ${tokenValue3rd.toFixed(4)} Per DegenPlays</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
