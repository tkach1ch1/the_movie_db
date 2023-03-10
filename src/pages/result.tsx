import Movie from '@/components/movie'
import Movies from '@/components/movies'
import NoFoundResult from '@/components/not_found_result'
import SearchBar from '@/components/search_bar'
import { SearchResultText } from '@/styles/result.style'
import { Box } from '@mui/system'
import React from 'react'

const Result = () => {
    return (
        <>
            <SearchResultText>Search result:</SearchResultText>
            <Box sx={{ marginBottom: '20px' }}>
                <SearchBar width='600px' />
            </Box>
            {false ? <NoFoundResult /> : null}
            <Movies />
        </>
    )
}

export default Result
