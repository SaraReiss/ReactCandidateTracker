import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CountContext = createContext();

const CountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
 
    const refreshCounts = async () => {
        const pendingCount = await axios.get('/api/candidateTracker/getcount?status=pending');
        setPendingCount(pendingCount.data.count);
        const confirmedCount = await axios.get('/api/candidateTracker/getcount?status=confirmed');
        setConfirmedCount(confirmedCount.data.count);
        const refusedCount= await axios.get('/api/candidateTracker/getcount?status=refused');
        setRefusedCount(refusedCount.data.count);
    }

    useEffect(() => {
        refreshCounts();
    }, []);

    return (
        <CountContext.Provider value={{ pendingCount, confirmedCount, refusedCount, refreshCounts }}>
            {children}
        </CountContext.Provider>
    )

}

const useCount = () => {
    return useContext(CountContext);
}

export { CountContextComponent, useCount };