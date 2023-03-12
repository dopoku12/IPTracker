import axios from "axios";
import { useEffect, useState } from "react";

const usefetchapi = () => {
    const [data, SetData] = useState()
    //const apiKey = process.env.REACT_APP_API_KEY;

    // useEffect(() => {
    //     let ip_addr = '73.9.149.180'
    //     async () => {
    //         try {
    //             let response = await axios.get({
    //                 baseUrl: 'https://api.api-ninjas.com/v1/iplookup?address=' + ip_addr,
    //                 headers: { 'X-Api-Key': API_KEY },
    //                 json: true
    //             });
    //             console.log(response);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }


    // }, []);
    return { data }
}

export default usefetchapi;