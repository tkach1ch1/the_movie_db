import React, { ReactNode } from 'react'
import { MainSection, StyledContainer } from '../styles/components.style'
import Header from './header'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <StyledContainer
                maxWidth='md'
                disableGutters
            >
                <Header />
                <MainSection>{children}</MainSection>
            </StyledContainer>
        </div>
    )
}

export default Layout
