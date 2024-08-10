'use client'

import { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

interface MapStyles {
    width: string;
    height: string;
    borderRadius: string;
}

interface LatLng {
    lat: number;
    lng: number;
}

interface MapOptions {
    zoomControl: boolean;
    tilt: number;
    gestureHandling: string;
    mapTypeId: string;
}

interface MarkerData {
    id: number;
    position: LatLng;
    title: string;
}

const defaultMapContainerStyle: MapStyles = {
    width: '100%',
    height: '100vh',
    borderRadius: '15px 0px 0px 15px',
};

// Updated to a central location in India (New Delhi)
const defaultMapCenter: LatLng = {
    lat: 28.6139,
    lng: 77.2090
}

const defaultMapZoom = 16;

const defaultMapOptions: MapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap', // Changed to 'roadmap' for better visibility of India
};

// Sample data for markers in India
const markers: MarkerData[] = [
    { id: 1, position: { lat: 28.6139, lng: 77.2090 }, title: "New Delhi" },
    { id: 2, position: { lat: 19.0760, lng: 72.8777 }, title: "Mumbai" },
    { id: 3, position: { lat: 12.9716, lng: 77.5946 }, title: "Bangalore" },
    { id: 4, position: { lat: 22.5726, lng: 88.3639 }, title: "Kolkata" },
    { id: 5, position: { lat: 13.0827, lng: 80.2707 }, title: "Chennai" },
];

const MapComponent: React.FC = () => {
    const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => setSelectedMarker(marker)}
                        icon={{
                            url: '/custom-marker.svg',
                            scaledSize: new window.google.maps.Size(30, 30)
                        }}
                    />
                ))}

                {selectedMarker && (
                    <InfoWindow
                        position={selectedMarker.position}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <h2>{selectedMarker.title}</h2>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )
};

export { MapComponent };