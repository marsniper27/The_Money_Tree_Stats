export const metadata = {
  title: 'Pricing - DegenPlays',
  description: 'Page description',
}

import UserStats from '@/components/user-stats'
import TokenStats from '@/components/token-stats'

export default function Dashboard() {
  return (
    <>
      <UserStats />
      <TokenStats />
    </>
  )
}
