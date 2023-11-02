import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CllgDts } from '../../../.data/CollegeData'

// ** react bootstrap
import {
    Row,
    Col,
    InputGroup,
    Form,
    Button,
    Container
} from "react-bootstrap";
import CentredHeadings from '../../headings/centred'

// ** hooks
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import useRestrictScroll from '../../../hooks/useRestrictScroll';
import useEmailAuth from "../../../hooks/auth/useEmailAuth";

// ** react icons
import { FiMail } from 'react-icons/fi';
import { PiPasswordBold } from 'react-icons/pi';
import { RxAvatar } from 'react-icons/rx';

// ** assests
import LoginImg from '../../../assests/images/feature-img/login.c21c5fff06feff084702.png'
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
        const userInputInstituteId = e.target.InstituteId.value; // Get the user input InstituteId

        try {
            
            // Find the college data that matches the user input InstituteId
            const matchingCollege = CllgDts.find((college) => college.InstituteId === userInputInstituteId);
            
            if (matchingCollege) {
                await handleEmailSignIn(email, password);
                console.log("Matching College Data:", matchingCollege);
            } else {
                console.log("No matching college found.");
            }

            navigate('/dashboard');
        } catch (error) {
            console.error("Email sign-in error:", error);
        }
    };


    return (
        <Row>
            <Col lg='6' md='6'>
                <img src={LoginImg} alt="" className="login-img w-100 fadeInLeft" />
            </Col>
            <Col lg='6' md='6' className='my-sm-5 fadeInRight'>
                <Container className="my-3" >
                    <CentredHeadings title='Login' />
                    <form onSubmit={handleEmailLogin} className="d-flex flex-column">
                        <InputGroup className='my-lg-2' style={{ border: '1px solid black', borderRadius: '0.5rem' }}>
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
                        <InputGroup className='my-lg-3' style={{ border: '1px solid black', borderRadius: '0.5rem' }}>
                            <InputGroup.Text id="basic-addon1" style={{ background: '#E8E8E8', border: 'none' }}><RxAvatar /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="InstituteId"
                                placeholder="Institute Id"
                                aria-label="Institute Id"
                                aria-describedby="Institute Id"
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