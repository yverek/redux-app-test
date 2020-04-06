import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button } from 'react-bootstrap'

const FilmCard = (props) => {

    return (
        <Card style={{ width: '18rem' }} className='p-2 m-2'>
            <Card.Body>
                <Card.Title>Film Title</Card.Title>
                <Card.Text>
                    Name:
          </Card.Text>
                <Card.Text>
                    Actors:
          </Card.Text>
                <Button variant="primary">VieW Details</Button>
            </Card.Body>
        </Card>
    )

}

export default FilmCard