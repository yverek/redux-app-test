import React from 'react'
import Card from 'react-bootstrap/Card'
import './FactsList.css'

const FactsList = ({factsList}) => {
    return (
        <div>
            <h1>Cat Facts</h1>
            <section className="cards">
                {
                    factsList.map((fact, index) => (
                        <FactCard key={index} num={index} first={fact.user.name.first} last={fact.user.name.last} {...fact} />
                    ))
                }
            </section>
        </div>
    )
}

const FactCard = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Fact #{ props.num+1 }</Card.Title>
                <Card.Text>
                    { props.text }<br /><br />
                    Submitted by <strong>{ props.first } { props.last }</strong><br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FactsList
