export const metadata = {
  title: 'ICO - DegenPlays',
  description: 'Page description',
}

import PricingTables from '@/components/pricing-tables'
import PricingTables_Coming_Soon from '@/components/pricing-tables-coming-soon'
import { STAGE } from'@/components/utils/config'

export default function Pricing() {
  if(STAGE === "Pre-Launch"){
    return (
      <>
        <PricingTables_Coming_Soon />
      </>
    )
  }
  else{
    return (
      <>
        <PricingTables />
      </>
    )
  }
}