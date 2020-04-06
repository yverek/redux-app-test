import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { Card } from 'react-bootstrap'

const People = () => {
    const [peopleList, setPeopleList] = useState([])

    return (
        <div>
            People
        </div>
    )
}

const CardPeople = (props) => {

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

export default People