'use client'
import { useState } from 'react';
import { TIERS } from '@/components/utils/config';

export default function PricingTables() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);
  const [tokenAmount, setTokenAmount ] = useState(0)
  const [selectedToken, setSelectedToken ] = useState('')
  const tokenOptions = ["Token 1", "Token 2", "Token 3"]; // Replace with your token options

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
                  <div className="text-gray-400">Get in on degen plays with little up front cost.</div>
                </div>
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
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0" onClick={() => {setSelectedTier(1);setIsModalOpen(true);setTokenAmount(1)}}>Buy DegenPlays</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
                
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">1001-5000 DegenPLays</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">0.90</span>
                    <span className="font-medium text-gray-400">/DegenPlays</span>
                  </div>
                  <div className="text-gray-400">Save a bit with a larger share.</div>
                </div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Get a few extra DegenPlays for showing your support.</span>
                  </li>
                  
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0"  onClick={() => {setSelectedTier(2);setIsModalOpen(true);setTokenAmount(1001)}}>Buy DegenPlays</a>
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
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Get in with what is likely to be the cheapest price ever.</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0"  onClick={() => {setSelectedTier(3);setIsModalOpen(true);setTokenAmount(5001)}}>Buy DegenPlays</a>
                </div>
              </div>
            </div>
          </div>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Once the intial 500,000 DegenPlays are sold the price will be increased to $1 + current token value until token value equals $5 then sales will be at current value.</p>
        </div>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Trades on any DEX with a DegenPlays pool will always be possible at current market value. DegenPlays will not be trying to influence the market. Prices here are for new token purchases. Purchases from a dex or third party will be honored at pool value not the ICO value.</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-center">
          <div className="bg-gray-900 rounded-lg p-6 border-2">
            <h2 className="text-2xl font-semibold mb-4">
              Purchase DegenPlays
            </h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">
                  Amount
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(parseInt(e.target.value))}
                />
              </div> 
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium text-gray-300">
                  Price: ${TIERS.find((tier: { tierNum: number }) => tier.tierNum ===  selectedTier).price}
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium text-gray-300">
                  Total: ${TIERS.find((tier: { tierNum: number }) => tier.tierNum ===  selectedTier).price * tokenAmount}
                </label>
              </div>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-center text-lg"
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
              >
                {tokenOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn-sm text-gray-400 ml-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  )
}
