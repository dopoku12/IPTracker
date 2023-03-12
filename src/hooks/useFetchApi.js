import axios from "axios";
import { useEffect, useState } from "react";

const usefetchapi = () => {
    useState()
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        let ip_addr = '73.9.149.180'
        axios.get({
            baseUrl: 'https://api.api-ninjas.com/v1/iplookup?address=' + ip_addr,
            headers: { 'X-Api-Key': API_KEY },

        }).then(res => {
            console.log(res);
        })


    }, []);
}

export default usefetchapi;