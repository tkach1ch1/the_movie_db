import { theme } from '@/assets/theme'
import styled from '@emotion/styled'

export const HomeWrapper = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '150px',
})

export const DescriptionWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '60px',
})

export const DescriptionTitle = styled('h1')({
    all: 'unset',
    fontSize: '30px',
    fontWeight: '200',
    fontStyle: 'italic',
    color: theme.palette.primary.main,
})

export const DescriptionText = styled('p')({
    fontSize: '18px',
    color: theme.palette.primary.light,
})
