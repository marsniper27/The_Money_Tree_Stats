'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'

const chains = [bsc]
const projectId = 'c39826043766c43801673595bb219f8b'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
     <WagmiConfig config={wagmiConfig}>
      <main className="grow">

        {children}

      </main>

      {/* <Footer /> */}
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} explorerRecommendedWalletIds= {[
  'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
  '18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1',
  '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927'
]}/>
    </>
  )
}
