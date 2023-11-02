import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import { Container } from "react-bootstrap";

import { historicalData } from '../../.data/historicalData'

function ChartsComp() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'Institute_Name',
                data: historicalData.map((data) => data.TLR_22),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <Container>
            <div style={{ width: 700 }}>
                {/* <BarChart chartData={userData} /> */}
            </div>
            <div style={{ width: 700 }}>
                <LineChart historicalData={historicalData} />
            </div>
            <div style={{ width: 700 }}>
                {/* <PieChart historicalData={historicalData} /> */}
            </div>
        </Container>
    );
}

export default ChartsComp;