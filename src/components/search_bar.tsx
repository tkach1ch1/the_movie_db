import {
    SearchBarWrapper,
    SearchButton,
    SearchForm,
    SearchInput,
    SearchInputContainer,
    StyledIcon,
} from '@/styles/search_bar.style'
import React, { CSSProperties, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/reducerHook'
import { getSearchInput } from '@/redux/searchReducer'

interface SearchBarProps {
    width: string
}

const SearchBar = ({ width }: SearchBarProps) => {
    const [search, setSearch] = useState('')

    const router = useRouter()

    const dispatch = useAppDispatch()

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const onHandleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
        dispatch(getSearchInput(search))
        router.push('/result')
    }
    return (
        <SearchBarWrapper>
            <SearchForm style={{ maxWidth: width }}>
                <SearchInputContainer>
                    <SearchInput
                        type='search'
                        placeholder='Search for movies'
                        onChange={onInputChange}
                        value={search}
                    />
                    <StyledIcon>
                        <BsSearch style={{ width: '20px', height: '20px' }} />
                    </StyledIcon>
                </SearchInputContainer>
                <SearchButton onClick={onHandleClick}>Find</SearchButton>
            </SearchForm>
        </SearchBarWrapper>
    )
}

export default SearchBar
