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
      <Script id='gtag' strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-R2F19FE31M');`}}>
      </Script>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp