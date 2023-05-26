const Dashboard = ({ data }) => {
    return (
        <ul
            className="list-group container
            d-flex flex-row shadow-lg">
            <li className="list-group-item
            border-top-0 
            border-bottom-0">
                CLIENT-IP ADDRESS
                <h3 className="list-text " id="address">
                    {data.address}
                </h3>
            </li>
            <li className="list-group-item
            border-top-0
            border-bottom-0">
                City
                <h3 className="list-text " id="address">
                    {data.city}
                </h3>
            </li>
            <li className="list-group-item
            border-top-0
            border-bottom-0">
                ISP
                <h3 className="list-text " id="isp">
                    {data.isp}
                </h3>
            </li>
            <li className="list-group-item
            border-top-0
            border-bottom-0">
                TIMEZONE
                <h3 className="list-text  " id="timezone">
                    {data.timezone}
                </h3>
            </li>
        </ul>
    );
}

export default Dashboard;