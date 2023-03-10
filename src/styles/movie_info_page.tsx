import { theme } from '@/assets/theme'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const MovieInfoContrainer = styled(Box)({
    display: 'flex',
    gap: '70px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
    },
})

export const LeftSideInfo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
})

export const MovieInfoImg = styled(Box)({
    backgroundColor: '#3b4d9c',
    width: '250px',
    height: '350px',
    borderRadius: '20px',
    marginBottom: '30px',
})

export const MovieAddButtonsContainer = styled(Box)({
    display: 'flex',
})

export const RightSideInfo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.main,
})

export const MovieInfoTitle = styled('h1')({
    fontSize: '40px',
    fontWeight: '500',
    marginTop: '0',
})

export const MovieDescTitles = styled('h4')({
    textTransform: 'uppercase',
    fontSize: '14px',
    marginBottom: '5px',
})

export const MovieDesc = styled('p')({
    fontSize: '12px',
    fontWeight: '200',
    maxWidth: '400px',
})

export const TableHeader = styled('th')({
    textAlign: 'left',
    fontWeight: '400',
    fontSize: '12px',
    color: '#606060',
})

export const TableDesc = styled('td')({
    fontStyle: 'italic',
    fontSize: '12px',
})
