import { useEffect } from 'react'
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Leafletmap = ({ data }) => {
    const userLnL = [data.lat, data.lon]
    const defaultLnL = [51.505, -0.09]
    return (
        <MapContainer center={
            data ? userLnL : defaultLnL
        }
            zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={
                data ? userLnL : defaultLnL
            }>
                <Popup>
                    {data.city}, {data.region} ({data.country})
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default Leafletmap;