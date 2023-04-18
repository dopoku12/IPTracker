import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Leafletmap = ({ data }) => {
    console.log('lat:', data.lat, 'lon:', data.lon)
    return (

        <MapContainer center={
            data ? [data.lat, data.lon] :
                [51.505, -0.09]
        }
            zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a 
                href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
                contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={
                data ? [data.lat, data.lon] :
                    [51.505, -0.09]
            }>
                <Popup>
                    Current location
                </Popup>
            </Marker>
        </MapContainer>

    )
}
export default Leafletmap;