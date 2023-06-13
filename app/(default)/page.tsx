export const metadata = {
  title: 'Home - DegenPlays',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import Process from '@/components/process'
import Target from '@/components/target'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Target />
    </>
  )
}
