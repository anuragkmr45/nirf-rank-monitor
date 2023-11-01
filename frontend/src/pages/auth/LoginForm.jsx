import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ** react bootstrap
import {
    Row,
    Col,
    InputGroup,
    Form,
    Button,
    Container
} from "react-bootstrap";

// ** hooks
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useRestrictScroll from '../../hooks/useRestrictScroll';
import useEmailAuth from "../../hooks/auth/useEmailAuth";

// ** react icons
import { FiMail } from 'react-icons/fi';
import { PiPasswordBold } from 'react-icons/pi';

// ** assests
import LoginImg from '../../assests/images/feature-img/login.c21c5fff06feff084702.png'
// import './style.css'

const LoginForm = () => {
    useSmoothScroll();
    useRestrictScroll();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'LAZY LOADING | Login';
    }, []);
    
    const { handleEmailSignIn } = useEmailAuth();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await handleEmailSignIn(email, password);
            navigate('/dashboard')
        } catch (error) {
            console.error("Email sign-in error:", error);
        }
    };

    return (
        <Row>
            <Col lg='6' md='6'>
                <img src={LoginImg} alt="" className="login-img w-100" />
            </Col>
            <Col lg='6' md='6' className='my-sm-5'>

                <Container className="my-3" >
                    <Row>
                        <Col> <hr /> </Col>
                        <Col className='text-center' >
                            <small>Admin Login</small>
                        </Col>
                        <Col> <hr /> </Col>
                    </Row>
                    <form onSubmit={handleEmailLogin} className="d-flex flex-column">
                        <InputGroup className='my-lg-4' style={{ border: '1px solid black', borderRadius: '0.5rem' }}>
                            <InputGroup.Text id="basic-addon1" style={{ background: '#E8E8E8', border: 'none' }}><FiMail /></InputGroup.Text>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="email"
                                style={{ background: '#E8E8E8', border: 'none' }}
                            />
                        </InputGroup>
                        <InputGroup style={{ border: '1px solid black', borderRadius: '0.5rem' }}>
                            <InputGroup.Text id="basic-addon1" style={{ background: '#E8E8E8', border: 'none' }}><PiPasswordBold /></InputGroup.Text>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="password"
                                style={{ background: '#E8E8E8', border: 'none' }}
                            />
                        </InputGroup>
                        <small className="text-end" >Forgot Password</small>
                        <Button type="submit" variant="success" className='my-lg-3'>Login</Button>
                    </form>
                </Container>
            </Col>
        </Row>
    );
}

export default LoginForm;