export const metadata = {
  title: 'Buy Backs - DegenPlays',
  description: 'Page description',
}

import Hero from '@/components/hero-buyback'
import BuyBacks from '@/components/buybacks'
import BuyBacks_example from '@/components/buybacks_example'

export default function BuyBack() {
  return (
    <>
      <Hero />
      <BuyBacks />
      <BuyBacks_example />
    </>
  )
}