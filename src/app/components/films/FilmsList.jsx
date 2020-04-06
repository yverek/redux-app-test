import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {Container,Row} from 'react-bootstrap'
import FilmCard from './FilmCard'

const FilmsList = () => {

    return (
        <Container>
            <Row>
               <h1>Film Work!</h1>
            </Row>
            <Row>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
            </Row>
        </Container>

    )

}

export default FilmsList