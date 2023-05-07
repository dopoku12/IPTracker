const Searchbar = ({ FaAngleRight }) => {
    return (
        <nav>
            <form method="POST" action="http://localhost:3003/"
                className='input-group'>
                <input type="search" name="search"
                    className='form-control rounded'
                    placeholder='Search for an IP Address A.B.C.D' />

                <button type='submit' className='btn btn-dark'>
                    <FaAngleRight />
                </button>
            </form>
        </nav>
    );
}

export default Searchbar;