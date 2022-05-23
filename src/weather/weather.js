import { useState } from "react";
import { createUseStyles } from "react-jss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const useStyles = createUseStyles({
  container: {
    marginTop: "100px",
    marginBottom: "7%",
    textAlign: "center",
    minHeight: "calc(100vh - 400px)",
    fontFamily: "Quicksand",
  },
  searchBtn: {
    marginTop: "25px",
  },
  tempFonts: {
    fontSize: "1.5rem",
    fontWeight: "200",
  },
  error: {
    fontSize: "30px",
    fontWeight: "200",
    marginTop: "100px",
    fontFamily: "M PLUS Code Latin",
  },
  temp: {
    fontSize: "40px",
  },
  weatherInfo: {
    backgroundColor: "#e0e0e0",
    marginTop: "60px",
    padding: "10px",
    border: "1px solid #b0b0b0",
    borderRadius: "12px",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Weather = () => {
  const classes = useStyles();
  const apiKey = "0ff2ef9ba9ccf0a1d12113c67b53da8a";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);

  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .then(console.log(weatherData));
  };

  return (
    <div className={classes.container}>
      <h2>Weather App</h2>
      <div>
        <TextField
          id="filled-basic"
          label="Enter a city name"
          variant="filled"
          sx={{ width: "40%" }}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div className={classes.searchBtn}>
        <Button variant="contained" onClick={fetchData}>
          Search
        </Button>
      </div>
      {typeof weatherData.main !== "undefined" && (
        <div className={classes.weatherInfo}>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
          <p className={classes.tempFonts}>{weatherData.name}</p>
          <p className={classes.temp}>{Math.round(weatherData.main.temp)} °C</p>
          <p className={classes.tempFonts}>{weatherData.weather[0].main}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={"weather icon"}
          />
        </div>
      )}
      {weatherData.cod === "404" && (
        <p className={classes.error}>City not found !</p>
      )}
    </div>
  );
};

export default Weather;
