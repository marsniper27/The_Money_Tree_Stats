export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <li>
              <h4 className="text-xl font-medium mb-2">What chains do you make plays on?</h4>
              <p className="text-lg text-gray-400">DegenPlays makes plays on various chains. While we prefer chains with more cost-effective gas fees, we are willing to enter plays on any chain if the potential reward justifies the fees.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Why don't you disclose the plays you are doing?</h4>
              <p className="text-lg text-gray-400">Due to the short-term nature of these plays, some may open and close within an hour or two. It is impractical for us to show all the plays in real-time.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do you decide what plays to make?</h4>
              <p className="text-lg text-gray-400">DegenPlays explores opportunities on our own and also consider suggestions from others in this space. We conduct research on the plays as much as possible, although time constraints can sometimes make this challenging, before making any decisions.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How will you ensure DegenPlays make a profit?</h4>
              <p className="text-lg text-gray-400">DegenPlays cannot guarantee profits. However, DegenPlays offers a way to participate in these highly risky opportunities while risking less of your own funds. Part of the funds will be invested in proven long-term plays, which helps mitigate potential losses.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do you decide how much to put into each play?</h4>
              <p className="text-lg text-gray-400">Once DegenPlays identify a play worth pursuing, DegenPlays starts with a small position to test the viability of the funds' retrieval and payout process. If everything goes well, DegenPlays increases the position size using a portion of the funds based on the risk and potential payout.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">What is with the 4 month rules?</h4>
              <p className="text-lg text-gray-400">DegenPlays has identified several stable plays that have consistently yielded returns over a significant period. To mitigate any potential losses, DegenPlays will allocate a portion of the funds to these plays. After the 4-month mark, DegenPlays anticipates that these long-term plays will have reached a stable stage, allowing for greater transparency in token pricing.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}
