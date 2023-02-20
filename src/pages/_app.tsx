import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client, localClient } from '@/utils/apollo'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/utils/themes'

export default function App({ Component, pageProps }: AppProps) {
  const { page } = pageProps
  const apolloClient = page === 'local' ? localClient : client

  const [theme, setTheme] = useState<string>('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches
    setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
