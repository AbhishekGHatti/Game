import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "60%",
    display: "flex",
    flexDirection: "column-reverse",
    scrollBehavior: "smooth",
    overflowY: "scroll",
    height: "253px",
  },
  card: {
    borderRadius: "12px",
    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    margin: "1rem 0",

    background: "linear-gradient(to right, #10365B , #1F2229 , #10365B)",
    width: "100%",
  },
  expenseItemDiscription: {
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",

    flex: 1,
  },
  expenseItemPrice: {
    display: "flex",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "1px solid #65A9E6",
    backgroundColor: "#1E242E",
    color: "#65A9E6",
    padding: "0.5rem",
    borderRadius: "12px",
    width: "7%",
    justifyContent: "center",
    alignItems: "center",
  },
  expenseDate: {
    display: "flex",
    flexDirection: "column",
    width: "5.5rem",
    height: "5.5rem",
    border: "1px solid #65A9E6",
    backgroundColor: "#1E242E",
    color: "#65A9E6",
    borderRadius: "12px",
    alignItems: "center",
    justifyContent: "center",
  },
  expenseDateMonth: {
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  expenseDateYear: {
    fontSize: "0.75rem",
  },
  expenseDateDay: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
});

const ScoreCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.score.map((item) => (
        <div className={classes.card}>
          <div className={classes.expenseDate}>
            <div className={classes.expenseDateMonth}>{item.date.month}</div>
            <div className={classes.expenseDateYear}>{item.date.year}</div>
            <div className={classes.expenseDateDay}>{item.date.day}</div>
          </div>
          <div className={classes.expenseItemDiscription}>
            <h2 style={{ color: "#4798E1" }}>Score</h2>
            <div className={classes.expenseItemPrice}>{item.score}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreCard;
