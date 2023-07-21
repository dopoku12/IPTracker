import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, SetData] = useState('')
    useEffect(() => {
        axios.post(url)
            .then((response) => {
                SetData(response.data);
                console.log(response.data)
            })
            .catch((err) => console.error('error:', err))
    }, [url]);
    return { data, SetData }
}

export default useFetch; 