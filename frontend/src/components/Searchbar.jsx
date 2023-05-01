const Searchbar = ({ FaAngleRight }) => {
    return (
        <nav>
            <form method="POST" action=""
                className='input-group'>
                <input type="search" name="search"
                    className='form-control rounded'
                    placeholder='Search for an IP Address' />

                <button type='submit' className='btn btn-dark'>
                    <FaAngleRight />
                </button>
            </form>
        </nav>
    );
}

export default Searchbar;