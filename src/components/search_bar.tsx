import {
    SearchBarWrapper,
    SearchButton,
    SearchForm,
    SearchInput,
    SearchInputContainer,
    StyledIcon,
} from '@/styles/search_bar.style'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'

const SearchBar = () => {
    const [search, setSearch] = useState('')

    const router = useRouter()

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const onHandleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
        router.push('/result')
    }
    return (
        <SearchBarWrapper>
            <SearchForm>
                <SearchInputContainer>
                    <SearchInput
                        type='search'
                        placeholder='Search for movies'
                        onChange={onInputChange}
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
