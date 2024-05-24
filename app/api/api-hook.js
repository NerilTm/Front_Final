"use client"
import { useState, useEffect } from 'react';
import { getNormolizedGamesDataByCategory } from './api-utils';


export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const data = await getNormolizedGamesDataByCategory(endpoint, category);
            setData(data);
        }
        fetchData();
    }, []);
    return data;
};