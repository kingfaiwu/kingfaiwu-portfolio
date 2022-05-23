import { createUseStyles } from "react-jss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  myDiv: {
    textAlign: "center",
  },
  over: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    color: "black",
    backgroundColor: "white",
    padding: "1rem",
    transform: "translateX(100%)",
  },
  movie: {
    overflow: "hidden",
    position: "relative",
  },
});

const imgApi = "https://image.tmdb.org/t/p/w1280";

const MovieCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.myDiv}>
      <Card sx={{ maxWidth: 245, borderRadius: "15px", height: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imgApi + props.poster_path}
            alt={props.title}
            sx={{ width: "100%", height: "auto" }}
            className={classes.movie}
          />
          <CardContent sx={{ backgroundColor: "#373b69", color: "white" }}>
            <Typography gutterBottom component="div">
              {props.title}
            </Typography>
            <Typography sx={{ color: "white" }}>
              {props.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MovieCard;
