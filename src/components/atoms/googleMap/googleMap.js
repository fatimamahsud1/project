import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 40.748817,
  lng: -73.985428
};

const API_KEY = 'AIzaSyBsqSY4lcwXtrfurhpET5i6wRpl8NZkWBw';
const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerClassName="w-full h-[20.25rem] md:h-[12rem] xl:h-[16.125rem] 2xl:h-[20.75rem] 3xl:h-[20.9375rem]"
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;