export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Current DegenPlays Value</h1>
            <p className="text-xl text-gray-400">$XXXX USD</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">XXX</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">DegenPlays Sold</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">$XXXX USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Funds Raised</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2" data-aos="fade-up">$XXXX USD</div>
              <div className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">Current Pool Value</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">How we calculating your price:</h1>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">DegenPlays owned</h1>
            <p className="text-xl text-gray-400">XXX DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">DegenPlays purchased through us</h1>
            <p className="text-xl text-gray-400">XXX DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">DegenPlays purchased through third-party</h1>
            <p className="text-xl text-gray-400">XXX DegenPlays</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Average Price paid</h1>
            <p className="text-xl text-gray-400">$XXX USD</p>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(((DegenPlays from us)*(purchase price))+((Degens from 3rd-party)*((pool value)/DegenPlays sold)))/(DegenPlays owned)</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Buyback rate in first 4 months</h1>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(Average paid)/2</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Buyback rate after first 4 months</h1>
            <p className="text-xl text-gray-400">This is calculated as:</p>
            <p className="text-xl text-gray-400">(Current pool value)/(DegenPlays sold)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
