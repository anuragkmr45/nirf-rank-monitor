import React from 'react'

import { Row, Col } from "react-bootstrap";

import LoginForm from '../components/forms/login-form'

const index = () => {
    return (
        <Row className='py-3' style={{ background: '#022B3A' }}>
            <Col></Col>
            <Col lg='10' className='p-3 fadeInUp'
                style={{ boxShadow: '2px 12px 15px -10px rgba(0, 0, 0, 0.8)', borderRadius: '1rem', background: 'white' }} >
                <LoginForm />
            </Col>
            <Col></Col>
        </Row>
    )
}

export default index
