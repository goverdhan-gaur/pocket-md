import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client, localClient } from '@/utils/apollo'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/utils/themes'
import { useThemeStore } from '@/store/theme'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  const { page } = pageProps
  const apolloClient = page === 'local' ? localClient : client
  const { theme, setTheme, toggleTheme } = useThemeStore()

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches
    setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [setTheme])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
        <Analytics />
      </ApolloProvider>
    </ThemeProvider>
  )
}
