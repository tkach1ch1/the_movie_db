import React from 'react'
import { NavBarContainer, NavBarWrapper, NavLink } from '../styles/components.style'
import { SiThemoviedatabase } from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    return (
        <NavBarContainer>
            <NavBarWrapper>
                <Link href='/'>
                    <SiThemoviedatabase
                        style={{ width: '40px', height: '40px', color: '#e1e2e3 ' }}
                    />
                </Link>
                <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
                    <li>
                        <NavLink
                            href='/favorites'
                            className={router.pathname == '/favorites' ? 'active' : ''}
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href='/watchlist'
                            className={router.pathname == '/watchlist' ? 'active' : ''}
                        >
                            Watchlist
                        </NavLink>
                    </li>
                </ul>
            </NavBarWrapper>
        </NavBarContainer>
    )
}

export default Header
