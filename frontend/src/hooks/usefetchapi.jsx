import axios from "axios";
import { useEffect, useState } from "react";
const usefetchapi = () => {
    const [data, SetData] = useState()
    // const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        let ip_addr = '73.9.149.180'
        async () => {
            try {
                let response = await axios.get(`localhost:${process.env.PORT}`,)

                console.log(response);
            } catch (err) {
                console.error(err);
            }
        }


    }, []);
    return { data }
}

export default usefetchapi; 