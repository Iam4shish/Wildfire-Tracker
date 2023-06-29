import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
const Map = ({eventData,center,zoom}) => {

  const [locationInfo,setLocationInfo]=useState(null);

  const marker = eventData.map(ev => {
    // in if condition >>> id === 8 means categories should be Wildfires
    if(ev.categories[0].id === "wildfires") {
      return <LocationMarker lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}
      onClick={() => setLocationInfo({id: ev.id, title: ev.title, date: ev.geometry[0].date})} />
    }
    return null;
})


  return (
    <div className='map'>
    <GoogleMapReact
    bootstrapURLKeys={{key:'AIzaSyCR0OPahM6kA9wi22zEv80UgyoL3idWqio'}}
    
    defaultCenter={center}
    defaultZoom={zoom}
    >
    {marker}
    </GoogleMapReact>
    {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
    
  )
}

Map.defaultProps ={
    center:{
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map