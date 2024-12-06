import type { AppProps } from 'next/app'
import { ReactNode, useState } from 'react'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { Inter } from 'next/font/google'
import { DarkLightThemeProvider } from '@lib/ui/theme/DarkLightThemeProvider'
import { Page } from '@lib/next-ui/Page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  const component = getLayout(<Component {...pageProps} />)

  return (
    <DarkLightThemeProvider value="dark">
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    </DarkLightThemeProvider>
  )
}

export default MyApp
