import {
    MovieElement,
    MovieImg,
    MovieLink,
    MovieTitle,
    MovieySubInfoBox,
    SubInfo,
    SubInfoGenre,
} from '@/styles/movie.style'
import React from 'react'

const Movie = () => {
    return (
        <MovieElement>
            <MovieLink href='#'>
                <MovieImg id='movie_img' />
                <MovieTitle id='movie_title'>Star Wars</MovieTitle>
                <MovieySubInfoBox>
                    <SubInfo>2015, &nbsp;</SubInfo>
                    <SubInfoGenre>Comedy, Drama</SubInfoGenre>
                </MovieySubInfoBox>
            </MovieLink>
        </MovieElement>
    )
}

export default Movie
