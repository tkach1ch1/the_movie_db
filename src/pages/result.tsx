import Movie from '@/components/movie'
import Movies from '@/components/movies'
import NoFoundResult from '@/components/not_found_result'
import SearchBar from '@/components/search_bar'
import { useAppSelector } from '@/hooks/reducerHook'
import { SearchResultText } from '@/styles/result.style'
import { SearchInput } from '@/styles/search_bar.style'
import { Box } from '@mui/system'
import React from 'react'

const Result = ({ movies }: any) => {
    const searchInput = useAppSelector((state) => state.search.search)
    return (
        <>
            <SearchResultText>Search result: {searchInput}</SearchResultText>
            <Box sx={{ marginBottom: '20px' }}>
                <SearchBar width='600px' />
            </Box>
            {false ? <NoFoundResult /> : <Movies />}
        </>
    )
}

export default Result
