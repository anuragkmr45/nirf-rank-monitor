import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import { Container } from "react-bootstrap";
import InstituteDataDropdown from '../../components/InstituteDataDropdown'

function ChartsComp() {
    const [selectedData, setSelectedData] = useState([]);
    
    const updateSelectedData = (data) => {
        setSelectedData(data);
        console.log(selectedData)
    };

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'selectedData[0].Institute_Name',
                data: UserData.map((data) => data.userGain),
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
            <InstituteDataDropdown updateSelectedData={updateSelectedData} />
            <div style={{ width: 700 }}>
                <BarChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <PieChart chartData={userData} />
            </div>
        </Container>
    );
}

export default ChartsComp;