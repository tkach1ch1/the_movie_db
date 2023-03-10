import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { theme } from '../assets/theme'
import Layout from '@/components/layout'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}

export default App
