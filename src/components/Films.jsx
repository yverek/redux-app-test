import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { Card } from 'react-bootstrap'

const Films = (props) => {
    const [filmsList, setFilmsList] = useState([])
 
    useEffect(() => {
        const { filmsList, dispatch } = props
        //dispatch({type: 'FILMS_FETCH_REQUESTED', payload: { filmsList }})
        const f = (dispatch) => {
            dispatch({type: 'FILMS_FETCH_REQUESTED', payload: { filmsList }})
        }
        setFilmsList(filmsList)
    }, [])

    return (
        <div>
            { filmsList }
        </div>
    )
}

const CardFilm = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Text>
                    Altezza: { props.height }
                    Peso: { props.mass }
                    Sesso: { props.gender }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Films