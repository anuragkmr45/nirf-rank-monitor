import { Row, Col } from 'react-bootstrap';

const CentredHeadings = ({ title, subtitle }) => {
    return (
        <Row className='text-center my-lg-3 my-sm-2' >
            <Col sm='3' > <hr className='fadeInLeft' style={{ border: '2px solid #425a82' }} /> </Col>
            <Col className='fadeInUp' sm='6' >
                <h1 style={{ fontWeight: '600', color: '#425a82' }} >{title}</h1>
                <small><b>{subtitle}</b></small>
            </Col>
            <Col sm='3' > <hr className='fadeInRight' style={{ border: '2px solid #425a82' }} /> </Col>
        </Row>
    )
}

export default CentredHeadings