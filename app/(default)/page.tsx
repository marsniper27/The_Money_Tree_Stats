export const metadata = {
  title: 'Home - The Money Tree Stats',
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
