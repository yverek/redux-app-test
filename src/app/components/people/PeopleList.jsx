import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {Container,Row} from 'react-bootstrap'
import PeopleCard from './PeopleCard'
import { connect } from 'react-redux'

const PeopleList = () => {

    return (
        <Container>
            <Row>
               <h1>People Work!</h1>
            </Row>
            <Row>
                <PeopleCard/>
            </Row>
        </Container>

    )

}
const mapStateToProps= ({ isLoadingPeople,
    people,
    errorPeople})=>({ isLoadingPeople,
        people,
        errorPeople})

export default connect(mapStateToProps, null) (PeopleList)