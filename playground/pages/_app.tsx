import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider,createTheme } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react"

const theme = createTheme({
  type:'dark'
})
export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
        <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}
