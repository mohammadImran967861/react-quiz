// eslint-disable-next-line no-unused-vars
import React from "react";
import Questions from "./Questions";
import classes from "./styles/Analysis.module.css";

// eslint-disable-next-line react/prop-types
export default function Analysis({ answers }) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Questions answers={answers} />
    </div>
  );
}
