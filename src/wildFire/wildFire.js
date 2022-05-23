import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import CircularProgress from "@mui/material/CircularProgress";
import Map from "./map";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { Icon } from "@iconify/react";
const useStyles = createUseStyles({
  container: {
    marginTop: "60px",
    marginBottom: "7%",
    minHeight: "calc(100vh - 400px)",
    fontFamily: "Quicksand",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
    fontFamily: "Caveat",
  },
  loading: {
    textAlign: "center",
  },
  locationIcon: {
    color: "red",
  },
});

const WildFire = () => {
  const classes = useStyles();
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      console.log(events);
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <Icon icon={locationIcon} className={classes.locationIcon} /> WildFire
        Live Data &nbsp; powered by NASA{" "}
        <Icon icon={locationIcon} className={classes.locationIcon} />{" "}
      </h1>
      <p className={classes.title}>Click fire icon to read descriptions</p>
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <h3 className={classes.loading}>
          Loading Data ... &nbsp; <CircularProgress size={20} />
        </h3>
      )}
    </div>
  );
};

export default WildFire;
