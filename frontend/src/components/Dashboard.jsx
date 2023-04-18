const Dashboard = ({ data }) => {

    return (
        <ul
            className="list-group
            d-flex 
            flex-row 
            shadow-lg">

            <li className="list-group-item
            border-top-0
            border-bottom-0">

                IP ADDRESS

                <h3 id="address">
                    {data.address}
                </h3>
            </li>

            <li className="list-group-item
            border-top-0
            border-bottom-0">

                city

                <h3 id="address">
                    {data.city}
                </h3>
            </li>
            <li className="list-group-item
            border-top-0
            border-bottom-0">
                ISP
                <h3 id="address">
                    {data.isp}
                </h3>
            </li>
            <li className="list-group-item
            border-top-0
            border-bottom-0">

                TIMEZONE

                <h3 id="address">
                    {data.timezone}
                </h3>
            </li>

        </ul>

    );
}

export default Dashboard;