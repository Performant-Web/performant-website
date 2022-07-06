import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Header from '../components/Header'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/source-sans-pro/300.css'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'


//focus outline - a11y
const focusShadow = '0 0 0 2px rgba(125,125,125,.75)'

const theme = extendTheme({
  fonts: {
    heading: `'Source Sans Pro', sans-serif`,
    body: `Source Sans Pro`,
  },
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
    }
  },
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp