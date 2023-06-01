export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Tokenomics</h1>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">1,000,000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Initial Supply</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">500,000</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">ICO with discount</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">&infin;</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Profit Potentail</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Supply</h1>
            <p className="text-xl text-gray-400">The intial total supply for DegenPlays is 1 million tokens.</p>
            <p className="text-xl text-gray-400">500,000 of the supply is being offered in the ICO.</p>
            <p className="text-xl text-gray-400">Minting adittional tokens is possible once the initial is all sold. New tokens will be minted at a cost of $1+current token value to ensure the value of the token is only positively effected.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Team Fees</h1>
            <p className="text-xl text-gray-400">Team members will be awarded a combined total of 10,000 DegenPlays at mint.</p>
            <p className="text-xl text-gray-400">The team will recieve 10% of the token sales and play profits.</p>
            <p className="text-xl text-gray-400">We feel due to the amount of work required to manage the degen plays this is a reasonable payment.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Token Value</h1>
            <p className="text-xl text-gray-400">Token value will be linked to the current project pool value.</p>
            <p className="text-xl text-gray-400">As payouts from degen plays come in the profit will be split 90% to the pool 10% to the team.</p>
            <p className="text-xl text-gray-400">As the pool increases the value of Degen Plays will increase.</p>
            <p className="text-xl text-gray-400">The team will not be establishing any DEX pools as the funds will be used for the plays.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Fund utilization</h1>
            <p className="text-xl text-gray-400">For the first 4 months 50% of the pool will be placed into degen plays to allow for the pool to gain value.</p>
            <p className="text-xl text-gray-400">After 4 months we will target a 70% pool utilization. This leaves funds available for token buybacks or any quick plays.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Token Buyback</h1>
            <p className="text-xl text-gray-400">You can sell your tokens back to the project at anytime.</p>
            <p className="text-xl text-gray-400">For the first 4 months buybacks will be at 50% of your investment.</p>
            <p className="text-xl text-gray-400">After 4 months buybacks will be at the current token value based on current pool funds.</p>
            <p className="text-xl text-gray-400">Please note that this only counts funds currently in the pool wallet, funds inside of a play are not counted for buyback pricing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
