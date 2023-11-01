import { Row, Col } from 'react-bootstrap'

import LoginForm from './LoginForm';

// ** hooks
import useSmoothScroll from '../../hooks/useSmoothScroll';

const Login = () => {
    useSmoothScroll()

    return (
        <Row className='py-3' style={{ background: '#022B3A' }}>
            <Col></Col>
            <Col lg='10' className='p-3'
                style={{ boxShadow: '2px 12px 15px -10px rgba(0, 0, 0, 0.8)', borderRadius: '1rem', background: 'white' }} >
                <LoginForm />
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Login;