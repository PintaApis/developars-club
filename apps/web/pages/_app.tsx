// pages/_app.js
import { UIProvider, theme } from '@developars/ui'

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <UIProvider theme={theme}>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default MyApp