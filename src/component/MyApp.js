import React from 'react'
import {Alert, Col, Container, Row} from 'reactstrap'
import './style.css'

class MyApp extends React.Component{
    render(){
        return(
            <>
            <h1 className='firstText'>Hello React</h1>
            <p>lorem ipsum</p>

            <Container>
                <Row>
                    <Col md='4'>
                        <Alert color='danger'>
                        this is red alert component
                        </Alert>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default MyApp

//A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML.
