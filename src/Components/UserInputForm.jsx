import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20 px",
    },
  },
}));

export default function UserInputForm(props) {
  const classes = useStyles();
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [company, SetCompany] = useState("");
  const [age, SetAge] = useState("");


  const onSave = () => {
    const userInput = {
      firstName: firstName,
      lastName: lastName,
      company: company,
      age: age,
      id: Math.random().toString(),
    };
    props.getData(userInput);
  };
  const onClear = () => {
    SetFirstName("");
    SetLastName("");
    SetCompany("");
    SetAge("");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="FirstName"
        value={firstName}
        onChange={(e) => {
          SetFirstName(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="LastName"
        value={lastName}
        onChange={(e) => {
          SetLastName(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Company"
        value={company}
        onChange={(e) => {
          SetCompany(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Age"
        value={age}
        onChange={(e) => {
          SetAge(e.target.value);
        }}
      />
      <Button variant="contained" color="primary" onClick={onSave}>
        Save
      </Button>
      <Button variant="contained" color="primary" onClick={onClear}>
        Clear
      </Button>
    </form>
  );
}
