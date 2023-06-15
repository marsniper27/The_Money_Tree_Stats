"use client"
export const metadata = {
  title: 'Dashboard - DegenPlays',
  description: 'Page description',
}

import UserStats from '@/components/user-stats'
import TokenStats from '@/components/token-stats'
import { useEffect, useState } from 'react';
import {initializeWeb3Instances} from '@/components/utils/config'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    async function initializeWeb3() {
    await initializeWeb3Instances();
    setIsLoading(false);
  }
  initializeWeb3();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <UserStats />
      <TokenStats />
    </>
  )
}
