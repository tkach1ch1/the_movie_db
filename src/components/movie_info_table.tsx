import { TableDesc, TableHeader } from '@/styles/movie_info_page'
import React from 'react'

const MovieInfoTable = () => {
    return (
        <table style={{ borderSpacing: '0 15px' }}>
            <tbody>
                <tr>
                    <TableHeader scope='row'>Rating</TableHeader>
                    <TableDesc>8.9</TableDesc>
                </tr>
                <tr>
                    <TableHeader scope='row'>Release year</TableHeader>
                    <TableDesc>2001</TableDesc>
                </tr>
                <tr>
                    <TableHeader scope='row'>Genres</TableHeader>
                    <TableDesc>Adventure, Fantacy</TableDesc>
                </tr>
                <tr>
                    <TableHeader scope='row'>Duration</TableHeader>
                    <TableDesc>120min</TableDesc>
                </tr>
            </tbody>
        </table>
    )
}

export default MovieInfoTable
