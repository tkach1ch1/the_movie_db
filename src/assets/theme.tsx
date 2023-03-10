import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        // Text colors
        primary: {
            main: '#FFFFFF',
            light: '#d5d5d5',
            dark: '#A7A7A7',
        },
        // Background colors
        secondary: {
            main: '#1a1a1a',
            light: '#282828',
            dark: '#000000',
        },
        success: {
            main: '#1db954',
        },
    },

    breakpoints: {
        values: {
            xs: 500,
            sm: 640,
            md: 1024,
            lg: 1280,
            xl: 1500,
        },
    },
})
