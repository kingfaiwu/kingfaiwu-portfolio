import { useState } from "react";
import data from "./data";
import { createUseStyles } from "react-jss";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
    marginBottom: "45px",
  },
  mainText: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const LorIpMain = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = () => {
    setText(shuffle(data));    
    setText(data.slice(0, count));
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className={classes.container}>
      <h2>Generate Random Lorem Ipsum Text!</h2>
      <TextField
        id="outlined-select-currency"
        select
        label="Amount of Paragraphs"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
        helperText="Select from 1 to 8"
        variant="standard"
        sx={{width: "200px"}}
      >
        {numbers.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <div className={classes.searchBtn}>
        <Button variant="contained" onClick={handleSubmit}>
          Generate
        </Button>
      </div>
      {text.map((item, index) => {
        return <p className={classes.mainText} key={index}>{item}</p>;
      })}
    </div>
  );
};

export default LorIpMain;
