export const metadata = {
  title: 'How It Works - The Money Tree Stats',
  description: 'Page description',
}

import Hero from '@/components/hero-features'
import Stats from '@/components/stats'
import FAQs from '@/components/faqs'

export default function Features() {
  return (
    <>
      {/* Hero content */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Coming Soon</p>
        </div>
      </div>
      {/* <Hero /> */}
      {/* <Stats />
      <FAQs/> */}
    </>
  )
}