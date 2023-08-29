export const metadata = {
  title: 'Home - DegenPlays',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import SystemStats from '@/components/system-stats'
import Ads from '@/components/ads'

export default function Home() {
  return (
    <>
      <Hero />
      <SystemStats />
      <Ads />
    </>
  )
}
