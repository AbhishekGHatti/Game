import { makeStyles } from "@material-ui/core";
import React from "react";
import ChartBar from "./ChartBar";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    width: "60%",

    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    height: 500,
  },
}));

const ScoreChart = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ background: "linear-gradient(to bottom, #10365B , #1F2229)" }}
    >
      {props.scorePoints.map((scorePoint) => (
        <ChartBar
          key={scorePoint.day}
          score={scorePoint.score}
          day={scorePoint.day}
        />
      ))}
    </div>
  );
};
export default ScoreChart;
