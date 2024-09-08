import { IconBox } from '@components/IconBox';
import theme from '@theme/index';
import { FlagCheckered, Van } from 'phosphor-react-native';
import { useRef } from 'react';
import MapView, {PROVIDER_DEFAULT, MapViewProps, LatLng, Marker, Polyline} from 'react-native-maps'

type Props = MapViewProps & {
    coords: LatLng[];
}

export function ViewMap({coords, ...rest}: Props){

    const mapRef = useRef<MapView>(null)

    async function MapLoad() {
        if(coords.length > 1){
            mapRef.current?.fitToSuppliedMarkers(['departure', 'arrival'], {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50}
            })
        }
    }

    const ultCoord = coords[coords.length - 1];
    return (
    <MapView 
    ref={mapRef}
    provider={PROVIDER_DEFAULT}
    style={{    width: '100%', height:'30%', borderRadius: 100}}
    region={{
        latitude: ultCoord.latitude,
        longitude: ultCoord.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }}
    onMapLoaded={MapLoad}
    {...rest}
    >

        <Marker identifier='departure' coordinate={coords[0]} >
            <IconBox size="PEQUENO" icon={Van} />
        </Marker>

        {
            coords.length > 1 &&
            <> 
            <Marker identifier='arrival' coordinate={ultCoord} >
            <IconBox size="PEQUENO" icon={FlagCheckered} />
            </Marker>

            <Polyline 
            coordinates={[...coords]}
            strokeColor={theme.COLORS.BRAND_MID}
            strokeWidth={5}
            />
            

            </>
        }

    </MapView>
    )
}

