import axios from "axios";
import { useEffect, useState } from "react";
const usefetchapi = () => {
    const [data, SetData] = useState()

    useEffect(() => {
        axios.get('http://localhost:3003/api')
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error('error:', err);

            })

    }, []);
    return { data }
}

export default usefetchapi; 