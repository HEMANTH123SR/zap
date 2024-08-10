import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/component/map"
export default function Home() {

    return (
        <MapProvider>
            <MapComponent />
        </MapProvider>
    );
}