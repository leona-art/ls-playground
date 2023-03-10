import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Card,Text } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ls-playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $green700 50%",
        }}
        weight="bold"
        >
          This is ls playground
        </Text>
      </main>
    </>
  )
}
