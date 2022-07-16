import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainCardContainer: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#1E2228",
    padding: "3%",
  },

  input: {
    color: "#15181D",
    textAlign: "center",
    fontSize: "3em",

    border: "2px solid black",
    borderRadius: 3,
    margin: 10,
    width: 100,
    height: 100,
    "&:error": {
      Color: "red",
    },
    "&::placeholder": {
      color: "#a6a6a6",
    },
  },

  inputCardWrapper: {
    width: 480,
    height: 480,
  },
  inputCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    margin: 10,
    height: "48px",
    width: "200px",
    background: "white",
    color: "#242831",
    "&:hover": {
      backgroundColor: "#0370D7",
      color: "white",
    },
    "&:disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto",
      background: "gray",
      color: "black",
    },
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scoreTextContainer: {
    width: 480,
    height: 480,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
});

const numbers = [
  [
    {
      value: Math.floor(Math.random() * 10),
      name: "Number1",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number2",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number3",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number4",
    },
  ],
  [
    {
      value: Math.floor(Math.random() * 10),
      name: "Number5",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number6",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number7",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number8",
    },
  ],
  [
    {
      value: Math.floor(Math.random() * 10),
      name: "Number9",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number10",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number11",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number12",
    },
  ],
  [
    {
      value: Math.floor(Math.random() * 10),
      name: "Number13",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number14",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number15",
    },
    {
      value: Math.floor(Math.random() * 10),
      name: "Number16",
    },
  ],
];

const InputCard = (props) => {
  const classes = useStyles();

  const inputFormRef = useRef();
  const [gussedNumbers, setGussedNumbers] = useState(null);
  const [prevNumbers, setPrevNumbers] = useState([]);
  const [defaultNumbers, setDefaulNumbers] = useState(numbers);
  const [inputMode, setInputMode] = useState(false);
  const [swapCount, setSwapCount] = useState(0);
  const [currentScore, setCurrentScore] = useState(null);
  const [formError, setFormError] = useState(false);

  const [defaultForm, setFormTitle] = useState(true);
  const [flexDirection, setFlexDirection] = useState({
    upperFlexDirection: "column",
    lowerFlexDirection: "row",
  });

  

  useEffect(() => {
   
    console.log('ran')
  });
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};

    width: "160px";
  `;

  const swapRight = () => {
    setSwapCount(swapCount + 1);

    setFlexDirection({
      ...flexDirection,
      upperFlexDirection: "row-reverse",
      lowerFlexDirection: "column",
    });

    console.log(swapCount);
  };

  const swapLeft = () => {
    setSwapCount(swapCount - 1);

    console.log(swapCount);
  };

  const guess = (e) => {
    e.preventDefault();
    debugger;
    const d = Object.values(e.target).reduce((resultArray, item) => {
      if (item.name && item.value)
        resultArray.push({
          name: item.name,
          value: item.value,
        });
      return resultArray;
    }, []);

    console.log(d);

    setPrevNumbers([...d]);

    setDefaulNumbers([
      [
        {
          value: "",
          name: "Number1",
        },
        {
          value: "",
          name: "Number2",
        },
        {
          value: "",
          name: "Number3",
        },
        {
          value: "",
          name: "Number4",
        },
      ],
      [
        {
          value: "",
          name: "Number5",
        },
        {
          value: "",
          name: "Number6",
        },
        {
          value: "",
          name: "Number7",
        },
        {
          value: "",
          name: "Number8",
        },
      ],
      [
        {
          value: "",
          name: "Number9",
        },
        {
          value: "",
          name: "Number10",
        },
        {
          value: "",
          name: "Number11",
        },
        {
          value: "",
          name: "Number12",
        },
      ],
      [
        {
          value: "",
          name: "Number13",
        },
        {
          value: "",
          name: "Number14",
        },
        {
          value: "",
          name: "Number15",
        },
        {
          value: "",
          name: "Number16",
        },
      ],
    ]);
    setInputMode(true);
    setFormTitle(false);
  };

  const post = async (score) => {
    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    const newScore = {
      date: {
        day: day,
        month: month,
        year: year,
      },
      score: score,
    };
    try {
      const resp = await axios.post("http://localhost:3001/scores", newScore);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };
  const verify = (e) => {
    e.preventDefault();

    const c = Object.values(e.target).reduce((resultArray, item) => {
      if (item.name && item.value)
        resultArray.push({
          name: item.name,
          value: item.value,
        });
      return resultArray;
    }, []);
    if (c.length === 16) {
      setGussedNumbers([...c]);
      setInputMode(false);
      setFormTitle("defaultForm");
      const correctGussedNumbers = prevNumbers.reduce(
        (resultArray, item, itemIndex) => {
          if (item.value == c[itemIndex].value) {
            console.log(item);
            resultArray.push({
              name: item.name,
              value: item.value,
            });
          }
          return resultArray;
        },
        []
      );

      setCurrentScore(correctGussedNumbers.length);
      setFormError(false);

      post(correctGussedNumbers.length);
    } else {
      // e.preventDefault();
      // setFormError(true);
      console.log("error");
    }
  };
  const onRetry = () => {
    setCurrentScore(null);

    setDefaulNumbers([
      [
        {
          value: Math.floor(Math.random() * 10),
          name: "Number1",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number2",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number3",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number4",
        },
      ],
      [
        {
          value: Math.floor(Math.random() * 10),
          name: "Number5",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number6",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number7",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number8",
        },
      ],
      [
        {
          value: Math.floor(Math.random() * 10),
          name: "Number9",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number10",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number11",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number12",
        },
      ],
      [
        {
          value: Math.floor(Math.random() * 10),
          name: "Number13",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number14",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number15",
        },
        {
          value: Math.floor(Math.random() * 10),
          name: "Number16",
        },
      ],
    ]);
  };

  return (
    <div className={classes.mainCardContainer}>
      <div>
        {currentScore == null ? (
          <div>
            <form
              ref={inputFormRef}
              onSubmit={(e) => (defaultForm ? guess(e) : verify(e))}
            >
              <div className={classes.inputCardContainer}>
                <div className={classes.inputCardWrapper}>
                  <CardWrapper
                    flexDirection={
                      swapCount % 4 === 1 || swapCount % 4 === -3
                        ? "row-reverse"
                        : swapCount % 4 === 2 || swapCount % 4 === -2
                        ? "column-reverse"
                        : swapCount % 4 === 3 || swapCount % 4 === -1
                        ? "row"
                        : "column"
                    }
                  >
                    {defaultNumbers.map((row, rowIndex) => (
                      <CardWrapper
                        key={rowIndex.toString()}
                        flexDirection={
                          swapCount % 4 === 1 || swapCount % 4 === -3
                            ? "column"
                            : swapCount % 4 === 2 || swapCount % 4 === -2
                            ? "row-reverse"
                            : swapCount % 4 === 3 || swapCount % 4 === -1
                            ? "column-reverse"
                            : "row"
                        }
                      >
                        {row.map((item, itemIndex) => (
                          <input
                            className={classes.input}
                            key={itemIndex.toString()}
                            name={item.name}
                            defaultValue={item.value}
                            disabled={!inputMode}
                            placeholder="?"
                            autoComplete="off"
                          />
                        ))}
                      </CardWrapper>
                    ))}
                  </CardWrapper>
                </div>
                {formError ? (
                  <span style={{ color: "white", paddingLeft: 12 }}>
                    Please Guess All Number!!!!
                  </span>
                ) : (
                  ""
                )}
                <div className={classes.buttonContainer}>
                  <button
                    type="submit"
                    className={classes.playButton}
                    disabled={inputMode}
                  >
                    Guess
                  </button>

                  <button
                    className={classes.playButton}
                    type="submit"
                    disabled={!inputMode}
                  >
                    Verify
                  </button>
                </div>
              </div>
            </form>
            <div className={classes.buttonContainer}>
              <button
                className={
                  inputMode
                    ? `.Mui-disabled ${classes.playButton} `
                    : classes.playButton
                }
                onClick={swapLeft}
                disabled={inputMode}
              >
                Swap Left
              </button>
              <button
                className={classes.playButton}
                onClick={swapRight}
                disabled={inputMode}
              >
                Swap Right
              </button>
            </div>
          </div>
        ) : (
          <div className={classes.scoreContainer}>
            <div className={classes.scoreTextContainer}>
              <h1 style={{ color: "#6B7483" }}>Score: {currentScore}</h1>
            </div>
            <button onClick={onRetry} className={classes.playButton}>
              Retry
            </button>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/dashboard">
            <button className={classes.playButton} style={{ width: "auto" }}>
              Navigate to DashBoard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InputCard;
