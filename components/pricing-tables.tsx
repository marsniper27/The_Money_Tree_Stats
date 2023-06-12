'use client'

import { useState } from 'react'

export default function PricingTables() {

  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">ICO Pricing</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Get DegenPlays at a discounted price for the first 500,000 DegenPlays sold.</p>
          </div>

          {/* Pricing tables */}
          <div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">1-1000 DegenPlays</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">1</span>
                    <span className="font-medium text-gray-400">/DegenPlays</span>
                  </div>
                  <div className="text-gray-400">Get in on degen plays with little investment.</div>
                </div>
                {/* <div className="font-medium mb-3">Features include:</div> */}
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Join in on the degen plays with as little as $1.</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Benefit from token value increases like everyone else.</span>
                  </li>
                  {/* <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li> */}
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Buy DegenPlays</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
                {/* <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Most Popular</div>
                </div> */}
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">1001-5000 DegenPLays</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">0.90</span>
                    <span className="font-medium text-gray-400">/DegenPlays</span>
                  </div>
                  <div className="text-gray-400">Save a bit with a larger investment.</div>
                </div>
                {/* <div className="font-medium mb-3">All features of Essential plus:</div> */}
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Get a few extra DegenPlays for showing your support.</span>
                  </li>
                  
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Buy DegenPlays</a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">5001+ DegenPLays</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">0.85</span>
                    <span className="font-medium text-gray-400">/DegenPlays</span>
                  </div>
                  <div className="text-gray-400">Get In early and get in big.</div>
                </div>
                {/* <div className="font-medium mb-3">All features of Essential plus:</div> */}
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Get in with what is likely to be the cheapest price ever.</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Buy DegenPlays</a>
                </div>
              </div>
            </div>
          </div>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Once the intial 500,000 DegenPlays are sold the price will be increased to $1 + current token value until token value equals $5 then sales will be at current value.</p>
        </div>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Trades on any DEX with a DegenPlays pool will always be possible at current value. We will not be trying to influence the market. Prices here are for new token purchases.</p>
      </div>
    </section>
  )
}
