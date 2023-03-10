import { theme } from '@/assets/theme'
import styled from '@emotion/styled'

export const SearchBarWrapper = styled('div')({
    width: '100%',
    height: '50px',
})

export const SearchForm = styled('form')({
    height: 'inherit',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
})

export const SearchInputContainer = styled('div')({
    position: 'relative',
    height: '100%',
    flexGrow: 1,
})

export const SearchInput = styled('input')({
    borderRadius: '5px',
    border: 'none',
    height: '100%',
    width: '100%',
    paddingLeft: '70px',
    paddingRight: '20px',
    background: 'linear-gradient(166.88deg, #3b4d9c 5.05%, #293775 90.55%)',
    color: theme.palette.primary.main,
    fontSize: '20px',
    '&:focus': {
        outline: '1px solid white',
    },
})

export const StyledIcon = styled('div')({
    position: 'absolute',
    top: '30%',
    transform: 'translate(130%)',
    color: theme.palette.primary.main,
})

export const SearchButton = styled('button')({
    padding: '0 40px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    background: 'linear-gradient(166.88deg, #3b4d9c 5.05%, #293775 90.55%)',
    '&:hover': {
        opacity: '0.8',
        transition: 'all 0.2s',
    },
    '&:active': {
        transform: 'scale(0.96)',
    },
})