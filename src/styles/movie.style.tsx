import { theme } from '@/assets/theme'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const MoviesGrid = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px,100%/3, max(150px, 100%/9)), 1fr))',
    gridGap: '20px',
    gridTemplateRows: '1fr',
    gridAutoRows: 'auto',
    placeItems: 'center',
})

export const MovieElement = styled(Box)({
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const MovieImg = styled(Box)({
    backgroundColor: '#3b4d9c',
    height: '246px',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '10px',
    border: '2px solid transparent',
    '&:hover': {
        border: '2px solid #348feb',
        transition: 'all 0.5s',
        cursor: 'pointer',
    },
})

export const MovieTitle = styled('h4')({
    all: 'unset',
    fontSize: '16px',
    color: theme.palette.primary.main,
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
})

export const MovieySubInfoBox = styled(Box)({
    display: 'flex',
})

export const SubInfo = styled('p')({
    fontSize: '12px',
    color: theme.palette.primary.light,
    marginTop: '5px',
})

export const SubInfoGenre = styled(SubInfo)({
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '14px',
})
