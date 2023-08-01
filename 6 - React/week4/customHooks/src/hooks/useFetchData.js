import { useState, useEffect } from "react";

export const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
            setError(null);
            
        } catch (error) {
            setError("Error occured!");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])


    return {data, isLoading, error};
}