import React, { useEffect } from 'react'

import { useAuth } from '../../context/AuthContext'

import VerticalNavTab from '../../components/nav-tab';

const Dashboard = () => {

    const { currentUser } = useAuth();

    useEffect(() => {
        document.title = `Dashboard | ${currentUser.email}`;
    }, []);

    return (
        <VerticalNavTab />
    )
}

export default Dashboard
