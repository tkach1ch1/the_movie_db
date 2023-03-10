import { theme } from '@/assets/theme'
import styled from '@emotion/styled'
import { Box } from '@mui/system'

export const SearchResultText = styled('p')({
    fontSize: '18px',
    color: theme.palette.primary.main,
    marginTop: '0',
})

export const NotFoundContainer = styled(Box)({
    maxWidth: '600px',
    width: '100%',
    color: theme.palette.primary.main,
    marginBottom: '30px',
})

export const NotFoundTitle = styled('h2')({
    fontSize: '25px',
    letterSpacing: '1.2px',
    marginTop: '0',
})

export const NotFoundDescription = styled('p')({
    fontSize: '16px',
    margin: '2px 0px',
})
