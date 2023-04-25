import axios from "axios";
import { useEffect } from "react";

const usePost = (ipRes, local) => {
    console.log(ipRes)
    return (
        useEffect(() => {
            axios(local + 'api', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ipRes),
            })
        }, [])

    );
}

export default usePost;