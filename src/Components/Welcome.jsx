import dashboardImage from "../Components/Utilities/images/dasboardImage.jpg";
import iconImage from "./Utilities/images/subStepIcon.jpg";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  upperDashboardContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1F2229",
  },
  lowerDashboardContainer: {
    backgroundColor: "#1D2027",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "50%",
    display: "flex",
    paddingTop: "9%",
    paddingLeft: "12%",
  },
  innerLeftContainer: {},

  iconImageContiner: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  stepsCard: {
    width: "28%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  stepsCardHeader: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },

  stepsCardContent: {
    fontSize: "16px",
    color: "#767F8F",
    textAlign: "center",
  },

  playButton: {
    fontSize: "14px",
    letterSpacing: "2px",
    fontWeight: "bolder",

    textTransform: "uppercase",

    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
    justifyContent: "center",

    height: "48px",
    width: "200px",
    background: "white",
    color: "#242831",
    "&:hover": {
      backgroundColor: "#0370D7",
      color: "white",
    },
  },
});

const WelcomePage = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div>
      <div className={classes.upperDashboardContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.innerLeftContainer}>
            <h1 style={{ color: "white" }}>
              Play Swap And Guess to Swap Your Memory
            </h1>
            <p style={{ color: "#8590A2", fontSize: "28px" }}>
              This game includes remembering random numbers, swap them, guess
              accordingly finally you will get score and you can track your
              score.
            </p>

            <Button
              className={classes.playButton}
              onClick={() => {
                history.push("/play");
              }}
            >
              Play
            </Button>
          </div>
        </div>
        <img src={dashboardImage} alt="Image" style={{ width: "50%" }} />
      </div>
      <div className={classes.lowerDashboardContainer}>
        <div className={classes.stepsCard}>
          <div className={classes.iconImageContiner}>
            <img src={iconImage} alt="" style={{ width: "150px" }} />
          </div>
          <div className={classes.stepsCardHeader}>
            <h3>Remember</h3>
          </div>
          <p className={classes.stepsCardContent}>
            Remember number present on fields to guess accordingly,remember the
            position of the number like a matrix form, need to guess number with
            position!!!
          </p>
        </div>
        <div className={classes.stepsCard}>
          <div className={classes.iconImageContiner}>
            <img src={iconImage} alt="" style={{ width: "150px" }} />
          </div>
          <div className={classes.stepsCardHeader}>
            <h3>Guess</h3>
          </div>
          <p className={classes.stepsCardContent}>
            Click on guess button ,guess the swapped numbers accordingly and
            dont forget to guess all numbers, there is no negative scoring !!!
          </p>
        </div>
        <div className={classes.stepsCard}>
          <div className={classes.iconImageContiner}>
            <img src={iconImage} alt="" style={{ width: "150px" }} />
          </div>
          <div className={classes.stepsCardHeader}>
            <h3>Verify</h3>
          </div>
          <p className={classes.stepsCardContent}>
            Click on Verify to get your score based on your correct gussed
            number, retry if want to improve memory power!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
