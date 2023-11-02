import React, { useState } from 'react';
import {historicalData} from '../../.data/historicalData'; // Import your data

const InstituteDataDropdown = ({ updateSelectedData }) => {
    const [selectedInstitute, setSelectedInstitute] = useState('');
    const [selectedData, setSelectedData] = useState([]);

    const instituteNames = [...new Set(historicalData.map(item => item["Institute Name"]))]; // Extract unique institute names

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedInstitute(selectedValue);

        // Filter the data based on the selected institute name
        const filteredData = historicalData.filter(item => item["Institute Name"] === selectedValue);
        setSelectedData(filteredData);

        updateSelectedData(filteredData);
    };

    return (
        <div>
            <h2>Select an Institute:</h2>
            <select value={selectedInstitute} onChange={handleSelectChange}>
                <option value="">Select an Institute</option>
                {instituteNames.map((name, index) => (
                    <option key={index} value={name}>
                        {name}
                    </option>
                ))}
            </select>

            {selectedData.length > 0 ? (
                <div>
                    <h2>Data for {selectedInstitute}:</h2>
                    <pre>{JSON.stringify(selectedData, null, 2)}</pre>
                </div>
            ) : (
                <p>No data found for the selected institute.</p>
            )}
        </div>
    );
};

export default InstituteDataDropdown;
