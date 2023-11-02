import React, { useState } from 'react';

function Recomandations() {
    const [csvData, setCsvData] = useState({ F: 0, NT: 0, NP: 0, SS: 0, FQE: 0, FRU: 0 });

    // Define a function to calculate N, F/N, and FSR
    const calculateFSR = () => {
        const { F, NT, NP } = csvData;
        const N = NT + NP;
        const FN = F / N;

        if (FN < 1) {
            // Set FSR to zero if F/N is less than 1
            return 0;
        } else {
            const FSR = 30 * (15 * (F / N));
            return FSR;
        }
    };

    // Define a function to check conditions and prompt
    const checkConditionsAndPrompt = () => {
        const { F, NT, NP } = csvData;
        const N = NT + NP;
        const FNpNt = F / N;

        if (FNpNt < F / N) {
            // Prompt to increase the number of faculty
            alert('Increase faculty to improve TLR Score and rank.');
        }
    };

    const calculateSS = () => {
        const { SS: currentSS } = csvData;
        // Calculate SS based on your model, let's assume it's calculated in a hypothetical function calculateModelSS()
        const calculatedSS = calculateModelSS();

        if (calculatedSS < currentSS) {
            // Prompt to re-evaluate sanctioned intake vs. enrolled students
            alert('Re-evaluate sanctioned intake vs. enrolled students.');
        }
    };

    const calculateFQE = () => {
        const { FQE: currentFQE } = csvData;
        // Calculate FQE based on your model, let's assume it's calculated in a hypothetical function calculateModelFQE()
        const calculatedFQE = calculateModelFQE();

        if (calculatedFQE < currentFQE) {
            // Prompt to increase faculty with Ph.D. and 15+ years of experience
            alert('Increase faculty with Ph.D. and 15+ years of experience.');
        }
    };

    const calculateFRU = () => {
        const { FRU: currentFRU } = csvData;
        // Calculate FRU based on your model, let's assume it's calculated in a hypothetical function calculateModelFRU()
        const calculatedFRU = calculateModelFRU();

        if (calculatedFRU < currentFRU) {
            // Prompt to focus on capital and operational expenses
            alert('Focus on capital and operational expenses.');
        }
    };


    return (
        <div>
            <button onClick={calculateFSR}>Calculate FSR</button>
            <button onClick={checkConditionsAndPrompt}>Check Conditions</button>
        </div>
    );
}

export default Recomandations;
