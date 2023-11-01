import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import ReviewForm from '../forms/review-form'
import Chart from '../charts'

const VerticalNavTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    return (
        <Tab.Container id="vertical-tab" activeKey={activeTab} onSelect={handleTabSelect}>
            <div className="row">
                <div className="col-md-3">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="tab1">Enquiry For Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab2">Check Out Trends</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-md-9">
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <ReviewForm />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab2">
                            <Chart />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    );
};

export default VerticalNavTab;
