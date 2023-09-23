import { FC } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/authContext'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="language" content="pt-BR"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps}/>
        <ToastContainer autoClose={2000} theme="light"/>
        <GlobalStyle/>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App