export const metadata = {
  title: 'Buy Backs - DegenPlays',
  description: 'Page description',
}

import Hero from '@/components/hero-buyback'
import BuyBacks from '@/components/buybacks'
import BuyBacks_Coming_Soon from '@/components/buybacks-coming-soon'
import BuyBacks_example from '@/components/buybacks_example'
import { STAGE } from'@/components/utils/config'

export default function BuyBack() {
  if(STAGE == 'Pre-Launch'){
    return (
      <>
        <BuyBacks_Coming_Soon />
      </>
    )
  }
  else{
    return (
      <>
        <Hero />
        <BuyBacks />
        <BuyBacks_example />
      </>
    )
  }
}