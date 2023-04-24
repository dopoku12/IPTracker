import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (api) => {
    const [data, SetData] = useState('')

    useEffect(() => {
        axios.get(api)
            .then((response) => {

                SetData(response.data)
            })
            .catch((err) => {
                console.error('error:', err);
            })

    }, [api]);
    return { data }
}

export default useGet; 