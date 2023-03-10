import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { theme } from '../assets/theme'
import Layout from '@/components/layout'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default App
