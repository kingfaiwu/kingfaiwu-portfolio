import { createUseStyles } from "react-jss";
import {  Button } from "@mui/material";
import Pdf from "./Resume.pdf";
import { useRef, useEffect } from "react";
import { BsArrowUpCircle, BsChevronDoubleDown } from "react-icons/bs";
import {
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiJest,
  SiDotnet,
  SiTypescript,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const useStyles = createUseStyles({
  arrow: {
    marginTop: "10px",
    position: "absolute",
    right: "10%",
    fontFamily: "Gloria Hallelujah",
    fontSize: "1.5rem",
  },
  mainContent: {
    width: "100%",
    // height: "500px",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    marginTop: "60px",
    fontSize: "2rem",
    marginLeft: "10%",
    marginRight: "10%",
    textAlign: "center",
    fontFamily: "Caveat",
  },
  workTitle: {
    paddingTop: "80px",
    fontSize: "1.5rem",
    marginLeft: "10%",
    marginRight: "10%",
    textAlign: "center",
    fontFamily: "Vollkorn SC",
  },
  body: {
    marginTop: "20px",
    fontSize: "1.2rem",
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center",
    fontFamily: "M PLUS Code Latin",
  },
  image: {
    marginTop: "80px",
    width: "35%",
    height: "auto",
    minWidth: "200px",
  },
  resumeBtn: {
    position: "relative",
    marginTop: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  downArrow: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "5%",
  },
  workExp: {
    backgroundColor: "#bdc9c8",
    // backgroundColor: "#c6c1de",
  },
  techStack: {
    // backgroundColor: "#ebf2d8",
    paddingBottom: "20px",
  },
  lineBreak: {
    width: "70%",
    marginBottom: "40px",
  },
  myBox: {
    paddingBottom: "120px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
    textAlign: "center",
  },
  workImg: {
    width: "90%",
    height: "auto",
  },
  bottomImg: {
    width: "35%",
    height: "auto",
  },
  techIcon: {
    width: "30%",
    height: "auto",
  },
});

const HomeBody = ({ timeline, ease }) => {
  const classes = useStyles();
  let icon = useRef(null);
  let title = useRef(null);
  let bodyContent = useRef(null);
  let btn = useRef(null);
  let upArrow = useRef(null);
  let downArrow = useRef(null);

  useEffect(() => {
    timeline.from(
      icon,
      1.3,
      {
        opacity: 0,
        y: "100",
        skewY: 3,
        ease: "slow(0.7, 0.7)",
      },
      "-=1"
    );
    timeline.from(title, 1, {
      opacity: 0,
      x: "100",
    });

    timeline.from(bodyContent, 1, {
      opacity: 0,
      x: "-100",
      stagger: {
        amount: 0.4,
      },
      ease: ease,
    });
    timeline.from(btn, 0.7, {
      opacity: 0,
      y: "100",
    });
    timeline.from([upArrow, downArrow], 1.5, {
      opacity: 0,
      y: "100",
      ease: "bounce",
    });
  });

  return (
    <div>
      <div className={classes.arrow} ref={(el) => (upArrow = el)}>
        Check me out <BsArrowUpCircle />
      </div>
      <div className={classes.mainContent}>
        <img
          className={classes.image}
          src={
            "https://insights.dice.com/wp-content/uploads/2018/03/Hipster-Developer-Dice.jpg"
          }
          alt={"Dev Icon"}
          ref={(el) => (icon = el)}
        />
      </div>
      <div className={classes.title} ref={(el) => (title = el)}>
        Hi! Welcome to King Fai Wu's website!
      </div>
      <div className={classes.body} ref={(el) => (bodyContent = el)}>
        I'm a web developer with a focus on the MERN stack, who is passionate to become a better developer! If you're
        looking for a developer to add to your team, I'd love to hear from you!
      </div>
      <div className={classes.resumeBtn} ref={(el) => (btn = el)}>
        <a
          href={Pdf}
          without
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            size="large"
          >
            Click to View Resume
          </Button>
        </a>
      </div>
      <div className={classes.downArrow} ref={(el) => (downArrow = el)}>
        <BsChevronDoubleDown />
      </div>
      <div className={classes.workExp}>
        <div className={classes.workTitle}>Work Experiences</div>
        {/* https://www.castlegarnews.com/wp-content/uploads/2021/11/27018200_web1_CP14547.jpg */}
        <Box className={classes.myBox} sx={{ flexGrow: 2 }}>
          <Grid container spacing={3}>
            <Grid item sm={10} md={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bell_Canada_logo_%281977%29.svg/1200px-Bell_Canada_logo_%281977%29.svg.png"
                alt="Bell Canada"
                className={classes.workImg}
              />
            </Grid>
            <Grid item sm={10} md={4}>
              <img
                src="https://www.todocanada.ca/wp-content/uploads/TorontoJOBS.ca-Logo-Design-Final-Files-01-1.jpg"
                alt="Bell Canada"
                className={classes.workImg}
              />
            </Grid>
            <Grid item sm={10} md={4}>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-open-graph.png"
                alt="Bell Canada"
                className={classes.workImg}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className={classes.techStack}>
        <div className={classes.workTitle}>Tech Stacks</div>
        <Box className={classes.myBox}>
          <Grid container spacing={3}>
            <Grid item xs={4} md={2}>
              <FaHtml5 className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaCss3Alt className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaJsSquare className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaReact className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiMaterialui className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaBootstrap className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaNodeJs className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiMongodb className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiMysql className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiMicrosoftsqlserver className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiTypescript className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiJest className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaGit className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaGithub className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <SiDotnet className={classes.techIcon} />
            </Grid>
            <Grid item xs={4} md={2}>
              <FaJava className={classes.techIcon} />
            </Grid>
          </Grid>
        </Box>
      </div>
      <hr className={classes.lineBreak} />
      <div className={classes.body}>
        Please feel free to reach out using linked icons below. <br />
        Source code of this portfolio can be found in the GitHub icon. <br />
        <img
          className={classes.bottomImg}
          src="https://www.gifcen.com/wp-content/uploads/2021/05/thank-you-gif-5.gif"
          alt={"thank you for coming!"}
        />
      </div>
    </div>
  );
};

export default HomeBody;
