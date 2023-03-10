import {
    MovieElement,
    MovieImg,
    MovieTitle,
    MovieySubInfoBox,
    SubInfo,
    SubInfoGenre,
} from '@/styles/movie.style'
import React from 'react'

const Movie = () => {
    return (
        <MovieElement>
            <MovieImg />
            <MovieTitle>Star Wars</MovieTitle>
            <MovieySubInfoBox>
                <SubInfo>2015, &nbsp;</SubInfo>
                <SubInfoGenre>Comedy, Drama</SubInfoGenre>
            </MovieySubInfoBox>
        </MovieElement>
    )
}

export default Movie
