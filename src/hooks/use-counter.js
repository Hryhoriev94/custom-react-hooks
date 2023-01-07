import {useEffect, useState} from "react";

const useCounter = (counterUpdateFunction) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counterUpdateFunction);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;