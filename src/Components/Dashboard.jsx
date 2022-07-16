import { useState, useEffect } from "react";
import ScoreChart from "./ScoreChart";
import ScoreCard from "../Components/ScoreCard";

import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2229",
  },
}));

const DashBoard = (a) => {
  const [scores, setScores] = useState([]);
  const [highScores, setHighScores] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`http://localhost:3000/highScores`).then((res) => {
      const score = res.data;
console.log(score)
      setHighScores([...score]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/scores`).then((res) => {
      const score = res.data;

      setScores([...score]);
    });
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <ScoreChart scorePoints={highScores} />

        <ScoreCard score={scores} />
      </div>
    </div>
  );
};

export default DashBoard;
