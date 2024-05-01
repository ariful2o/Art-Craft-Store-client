import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css'
import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/14831/14831599.png",
    // iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38] // size of the icon
});
// markers
const markers = [
    {
        geocode: [48.86, 2.3522],
        popUp: "Art & Craft Store"
    },
    // {
    //   geocode: [48.85, 2.3522],
    //   popUp: "Hello, I am pop up 2"
    // },
    // {
    //   geocode: [48.855, 2.34],
    //   popUp: "Hello, I am pop up 3"
    // }
];
export default function Map() {
    return (
        <>
            <MapContainer center={[48.8546, 2.3522]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Mapping through the markers */}
                {markers.map((marker, idx) => (
                    <Marker key={idx} position={marker.geocode} icon={customIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}
