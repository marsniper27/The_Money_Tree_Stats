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
              <p className="text-lg text-gray-400">DegenPlays make plays on all chains. While DegenPlays try to stick to plays on chains with more cost effective gas fees DegenPlays will enter plays on any chain if the reward justifies the fees.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Why don't you show what plays you are doing?</h4>
              <p className="text-lg text-gray-400">Due to the nature of these plays they can be very short term some times opening and closing in an hour or two. This makes it impracticle to show all the plays in real time.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do you decide what plays to do?</h4>
              <p className="text-lg text-gray-400">DegenPlays look into the opportunites on our own as well as looking at suggestions by others in this space. DegenPlays research as much as DegenPlays can (time constraints make this hard at times) before DegenPlays make any plays.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How will you ensure DegenPlays make a profit?</h4>
              <p className="text-lg text-gray-400">DegenPlays can not guarantee any profits. DegenPlays are offering away to get in on these highly risky opportunites while risking less of your own funds.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do you decide hoW muCh to put into each play?</h4>
              <p className="text-lg text-gray-400">Once DegenPlays decide a play is worth trying DegenPlays first do a small position to ensure that funds can be retrieved and payouts are working. IF it all goes well DegenPlays will make a larger play using a portion of the funds based ont he risk and potential payout.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">What is with the 4 month rules?</h4>
              <p className="text-lg text-gray-400">DegenPlays have found some plays that seem to be very stable and have been paying out regularly for DegenPlays for awhile. DegenPlays will be putting part of the funds into these plays to help offset and potential losses DegenPlays might face. The 4 month point DegenPlays feels will be a point where these long term plays will have reached a stable enough point that DegenPlays can be more open with the token pricing.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}
