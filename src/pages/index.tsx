import Head from 'next/head'
import { Hero } from '@/components/organisms/hero'

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Damian Morten</title>
      </Head>
      <Hero />
    </>
  )
}
