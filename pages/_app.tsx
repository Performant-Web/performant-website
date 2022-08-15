import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Header from '../components/Header'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

//focus outline - a11y
const focusShadow = '0 0 0 2px rgba(125,125,125,.75)'

const theme = extendTheme({

  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', '#171717')(props),
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: focusShadow
        }
      }
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: focusShadow
        }
      }
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-R2F19FE31M`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2F19FE31M', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp