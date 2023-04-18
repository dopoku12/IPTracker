import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, SetData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3003/api')
            .then((response) => {
                SetData(response.data)
            })
            .catch((err) => {
                console.error('error:', err);

            })

    }, []);
    return { data }
}

export default useFetch; 