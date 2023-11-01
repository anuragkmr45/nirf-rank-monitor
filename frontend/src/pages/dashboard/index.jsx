import React, { useEffect } from 'react'

import { useAuth } from '../../context/AuthContext'

import { Nav } from 'react-bootstrap';

const Dashboard = () => {

    const { currentUser } = useAuth();

    useEffect(() => {
        document.title = `Dashboard | ${currentUser.email}`;
    }, []);

    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Dashboard
