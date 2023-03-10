import { theme } from '@/assets/theme'
import styled from '@emotion/styled'
import { Box, Container } from '@mui/material'
import Link from 'next/link'

export const StyledContainer = styled(Container)({
    background: 'linear-gradient(149.91deg, #233458 13.36%, #111827 98.15%)',
    borderRadius: '20px',
    position: 'fixed',
    top: '0',
    bottom: '0',
    marginTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
})

export const NavBarContainer = styled('nav')({
    width: '100%',
    height: '60px',
    borderBottom: '1px solid #535F77',
})

export const NavBarWrapper = styled(Box)({
    height: '100%',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const NavLink = styled(Link)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
    fontWeight: '500',
    '&:hover': {
        color: theme.palette.primary.main,
        boxShadow: ' 0 1.5px 0 #fff',
    },
})

export const MainSection = styled('main')({
    padding: '40px',
    flexGrow: 1,
    overflow: 'scroll',
})
