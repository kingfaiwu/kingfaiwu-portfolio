import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import TextField from "@mui/material/TextField";
import MovieCard from "./movieCard";
import Grid from "@mui/material/Grid";

const useStyles = createUseStyles({
  container: {
    marginTop: "60px",
    marginBottom: "7%",
    marginLeft: "15%",
    minHeight: "calc(100vh - 400px)",
    fontFamily: "Quicksand",
    width: "70%",
    textAlign: "center",
  },
  searchBtn: {
    marginTop: "25px",
    marginBottom: "45px",
  },
  mainText: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const featuredApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Movie = () => {
  const classes = useStyles();
  const [inputName, setInputName] = useState("")
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featuredApi)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(searchApi + inputName)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);
    })
  }

  return (
    <div className={classes.container}>
       <div>
        <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Enter movie name and press Enter!"
          variant="filled"
          sx={{ width: "60%", marginBottom: "60px" }}
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        </form>
      </div>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        {movies && movies.length > 0 &&
          movies.map((m) => (
            <Grid item xs={12} md={3}>
              <MovieCard key={m.id} {...m} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Movie;
