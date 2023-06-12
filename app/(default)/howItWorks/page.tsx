export const metadata = {
  title: 'How It Works - DegenPlays',
  description: 'Page description',
}

import Hero from '@/components/hero-features'
import Stats from '@/components/stats'
import FAQs from '@/components/faqs'

export default function Features() {
  return (
    <>
      <Hero />
      <Stats />
      <FAQs/>
    </>
  )
}