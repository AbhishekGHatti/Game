import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { ReactComponent as Logo } from "../Components/Utilities/images/upperArrow.svg";

const useStyles = makeStyles((theme, score) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "22px",
    padding: "0px",
  },
  chatBarInner: {
    height: "100%",
    width: "100%",

    borderColor: "#313131",
    borderRadius: "12px",
    background: "#c3b4f3",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  chartBarFill: {
    background: "#4826b9",
    width: "100%",

    transition: {
      easing: {
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      },
      duration: {
        standard: 300,
      },
    },
    height: (props) => props.score,
  },
  chartBarLabel: {
    fontWeight: "bold",
    fontSize: "0.5rem",
    textAlign: "center",
  },
}));

const Filler = styled.div`
  width: 100%;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 0px;

  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
`;

const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  color: #539de4;
`;
const ChartBar = (props) => {
  const classes = useStyles();
  let fillerHieght = "0%";

  if (props.score > 0) {
    fillerHieght = (props.score / 16) * 100 + "%";
  }
  const fillers = [];

  for (let i = 0; i < props.score; i++) {
    fillers.push(i);
  }

  return (
    <div className={classes.root}>
      <ChartBarInner>
        <Filler height={fillerHieght} score={props.score}>
          <span
            style={{
              color:
                props.score < 3
                  ? "#103B65"
                  : props.score <= 8
                  ? "#085FAF"
                  : props.score <= 13
                  ? "#0370D7"
                  : "#54A1E4",
              fontWeight: "bold",
            }}
          >
            {props.score}
          </span>

          {fillers.map((item) => (
            <Logo
              fill={
                props.score < 3
                  ? "#103B65"
                  : props.score <= 8
                  ? "#085FAF"
                  : props.score <= 13
                  ? "#0370D7"
                  : "#54A1E4"
              }
              stroke="#54A1E4"
              style={{
                height: 20,
                transform: "rotate(-90deg)",
              }}
            />
          ))}
        </Filler>
      </ChartBarInner>
      <ChartBarLabel>{props.day}</ChartBarLabel>
    </div>
  );
};

export default ChartBar;
