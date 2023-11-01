import React, { createContext, useContext, useState } from 'react';
import Papa from 'papaparse';

// Create the context
const CSVContext = createContext();

export function useCSVContext() {
    return useContext(CSVContext);
}

export function CSVProvider({ children }) {
    const [csvData, setCSVData] = useState([]);

    const parseCSV = (file) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
                setCSVData(result.data);
            },
            error: (error) => {
                console.error('CSV Parsing Error:', error.message);
            },
        });
    };

    return (
        <CSVContext.Provider value={{ csvData, parseCSV }}>
            {children}
        </CSVContext.Provider>
    );
}
