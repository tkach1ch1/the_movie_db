import MovieInfoTable from '@/components/movie_info_table'
import {
    LeftSideInfo,
    MovieAddButtonsContainer,
    MovieInfoContrainer,
    MovieInfoImg,
    MovieInfoTitle,
    MovieDesc,
    MovieDescTitles,
    RightSideInfo,
} from '@/styles/movie_info_page'
import React from 'react'

const MovieInfoPage = () => {
    return (
        <MovieInfoContrainer>
            <LeftSideInfo>
                <MovieInfoImg />
                <MovieAddButtonsContainer> TODO </MovieAddButtonsContainer>
            </LeftSideInfo>
            <RightSideInfo>
                <MovieInfoTitle>One Piece Film : Red</MovieInfoTitle>
                <MovieDescTitles>Storyline:</MovieDescTitles>
                <MovieDesc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet condimentum nec
                    porttitor felis enim aliquet nibh. Commodo fringilla accumsan, elit, elementum
                    ullamcorper. Tempus non, semper eget adipiscing aenean sit pharetra ipsum
                    cursus.
                </MovieDesc>
                <MovieDescTitles>Actors:</MovieDescTitles>
                <MovieDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit</MovieDesc>
                <MovieInfoTable />
            </RightSideInfo>
        </MovieInfoContrainer>
    )
}

export default MovieInfoPage
