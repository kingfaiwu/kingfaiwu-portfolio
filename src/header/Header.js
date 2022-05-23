import { createUseStyles } from "react-jss";
import Button from "@mui/material/Button";

const useStyles = createUseStyles({
  home: {
    display: "inline-block",
    position: "absolute",
    top: "50px",
    left: "10%",
    margin: "0",
    fontFamily: "Quicksand",
    fontSize: "1.5rem",
    color: "purple",
  },
  demo: {
    display: "inline-block",
    position: "absolute",
    top: "50px",
    right: "10%",
    margin: "0",
    fontFamily: "Quicksand",
    fontSize: "1.5rem",
  },
  header: {
    height: "100px",
    position: "relative",
  },
  links: {
    textDecoration: "none",
  },
});

const Header = ({ timeline, ease }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.home}>
        <a className={classes.links} href="/">
          Home
        </a>
      </div>
      <div className={classes.demo}>
        <a className={classes.links} href="/demo">
          <Button size="large" variant="outlined" color="secondary">
            Demo
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
