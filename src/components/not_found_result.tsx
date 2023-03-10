import React from 'react'
import { NotFoundContainer, NotFoundDescription, NotFoundTitle } from '@/styles/result.style'

const NoFoundResult = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>Nothing was found for your query</NotFoundTitle>
            <NotFoundDescription>Try entering another name of a movie.</NotFoundDescription>
            <NotFoundDescription>
                Maybe you are looking for something that is not yet in the catalog.
            </NotFoundDescription>
        </NotFoundContainer>
    )
}

export default NoFoundResult
