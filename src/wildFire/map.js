import GoogleMapReact from "google-map-react";
import { createUseStyles } from "react-jss";
import LocationMarker from "./locationMarker";
import LocationInfoBox from "./locationInfoBox";
import { useState } from "react";

const useStyles = createUseStyles({
  container: {
    marginTop: "100px",
    marginBottom: "7%",
    textAlign: "center",
    minHeight: "calc(100vh - 400px)",
    fontFamily: "Quicksand",
  },
  map: {
    width: "80vw",
    height: "100vh",
    position: "relative",
  },
});

const Map = ({ eventData, center, zoom }) => {
  const classes = useStyles();
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDWvHAVin5RECdcnsh8aPknhYNtRVP9B8c" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
