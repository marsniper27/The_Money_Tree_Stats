
export const metadata = {
  title: 'Dashboard - DegenPlays',
  description: 'Page description',
}

import UserStats from '@/components/user-stats'
import TokenStats from '@/components/token-stats'
import { useEffect, useState } from 'react';
import {initializeWeb3Instances} from '@/components/utils/config'

export default function Dashboard() {

  return (
    <>
      <UserStats />
      <TokenStats />
    </>
  )
}
