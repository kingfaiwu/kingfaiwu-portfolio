import { createUseStyles } from "react-jss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FaGithub, FaLinkedin, FaPhone, FaMailBulk } from "react-icons/fa";

const useStyles = createUseStyles({
  arrow: {
    marginTop: "10px",
    position: "absolute",
    right: "10%",
    fontFamily: "Quicksand",
  },
  myBox: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "40px",
    textAlign: "center",
    paddingBottom: "5%",
  },
  footerIcon: {
    width: "12%",
    height: "auto",
    color: "#c7c9c8",
  },
  footerName: {
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "#c7c9c8",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.myBox}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <a
              href="https://github.com/kingfaiwu/King-Fai-Wu-Portfolio.git"
              target="_blank"
            >
              <FaGithub className={classes.footerIcon} />
            </a>
          </Grid>

          <Grid item xs={12} md={3}>
            <a href="https://www.linkedin.com/in/king-fai-wu" target="_blank">
              <FaLinkedin className={classes.footerIcon} />
            </a>
          </Grid>
          <Grid item xs={12} md={3}>
            <a href="mailto: xpwuu@yahoo.com.hk">
              <FaMailBulk className={classes.footerIcon} />
            </a>
          </Grid>
          <Grid item xs={12} md={3} sx={{ color: "#c7c9c8" }}>
            <a href="tel:518-645-4399">
              <FaPhone className={classes.footerIcon} />
            </a>{" "}
            +1 518-645-4399
          </Grid>
        </Grid>
        <div className={classes.footerName}>&copy; 2022 King Fai Wu </div>
      </Box>
    </footer>
  );
};

export default Footer;
