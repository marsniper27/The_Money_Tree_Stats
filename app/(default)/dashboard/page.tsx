
export const metadata = {
  title: 'Dashboard - DegenPlays',
  description: 'Page description',
}

import UserStats from '@/components/user-stats'
import TokenStats from '@/components/system-stats'

export default function Dashboard() {

  return (
    <>
      <UserStats />
      {/* <TokenStats /> */}
    </>
  )
}
