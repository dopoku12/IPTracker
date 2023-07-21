
const Dashboard = ({ data }) => {
    return (
        <table className="table">
            <thead >
                <tr>
                    <td scope="row" className="
             
            border-bottom-0">
                        CLIENT-IP ADDRESS
                    </td>

                    <td scope="row" className="
                
                border-bottom-0">
                        City
                    </td>

                    <td scope="row" className="
            
            border-bottom-0">
                        ISP
                    </td>

                    <td scope="row" className="
                
                border-bottom-0">
                        TIMEZONE
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="   border-bottom-0 " id="address">
                        {data.address}
                    </th>
                    <th className="    border-bottom-0" id="address">
                        {data.city}
                    </th>
                    <th className="    border-bottom-0" id="isp">
                        {data.isp}
                    </th>
                    <th className="     border-bottom-0" id="timezone">
                        {data.timezone}
                    </th>
                </tr>
            </tbody>
        </table>
    );
}

export default Dashboard;