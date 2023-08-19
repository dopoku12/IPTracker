import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function MapEvents({ data }) {
    const userLnL = [data.lat, data.lon]
    const defaultLnL = [51.505, -0.09]
    const map = useMapEvents({
        click() {
            this.flyTo(userLnL, this.getZoom())
        }

    })
    return !data ? null : (
        <Marker position={userLnL}>
            <Popup>
                {data.city}, {data.region} ({data.country})
            </Popup>
        </Marker>
    )
}

const Leafletmap = ({ data }) => {
    const userLnL = [data.lat, data.lon]
    const defaultLnL = [51.505, -0.09]
    return (
        <MapContainer
            center={
                data ? userLnL : defaultLnL
            }
            zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEvents data={data} />
        </MapContainer>
    )
}
export default Leafletmap;