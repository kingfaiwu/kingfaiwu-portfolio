import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    locationIcon: {
        fontSize: "2rem",
        color: "red",
      },
})

const LocationMarker = ({ lat, lng, onClick }) => {
    const classes = useStyles();
  return (
    <div className={classes.locationMarker} onClick={onClick}>
      <Icon icon={locationIcon} className={classes.locationIcon} />{" "}
    </div>
  );
};

export default LocationMarker;
