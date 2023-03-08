const Dashboard = () => {
    return (
        <ul
            className="list-group
            d-flex 
            flex-row 
            rounded
            shadow-lg"
        >
            <li className="list-group-item 
            border-top-0
            border-bottom-0 ">
                IP ADDRESS
                <h3 id="address">
                    1119
                </h3>
            </li>

            <li className="list-group-item 
            border-top-0
           border-bottom-0">
                LOCATION
                <h3 id="location">
                    1119
                </h3>
            </li>

            <li className="list-group-item 
            border-top-0
           border-bottom-0">
                TIMEZONE
                <h3 id="timezone">
                    1119
                </h3>
            </li>

            <li className="list-group-item 
            border-top-0
           border-bottom-0">
                ISP
                <h3 id="Isp">
                    1119
                </h3>
            </li>

        </ul>

    );
}

export default Dashboard;