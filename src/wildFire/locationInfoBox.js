import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  locationInfo: {
    position: "absolute",
    top: "50px",
    right: "50px",
    width: "400px",
    minHeight: "200px",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    fontSize: "18px",
    color: "white",
    fontFamily: "M PLUS Code",
  },
  myUL: {
    listStyleType: "none",
    padding: "0",
  },
  myLI: {
    padding: "5px 0",
  },
});

const LocationInfoBox = ({ info }) => {
  const classes = useStyles();
  return (
    <div className={classes.locationInfo}>
      <h2>Event Location Info</h2>
      <ul className={classes.myUL}>
        <li className={classes.myLI}>
          ID: <strong>{info.id}</strong>{" "}
        </li>
        <li className={classes.myLI}>
          TITLE: <strong>{info.title}</strong>{" "}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
