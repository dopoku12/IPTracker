import axios from "axios";
import { useState } from "react";

const Searchbar = ({ FaAngleRight }) => {
    const [usrInput, setUsrInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3003/", { data: usrInput })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <nav>
            <form onSubmit={submitHandler} className='input-group'>
                <input value={usrInput}
                    onChange={(e) => setUsrInput(e.target.value)}
                    name="search"
                    className='form-control rounded'
                    placeholder='Search for a Client IP Address A.B.C.D' />

                <button type='submit' className='btn btn-dark'>
                    <FaAngleRight />
                </button>
            </form>
        </nav>
    );
}

export default Searchbar;