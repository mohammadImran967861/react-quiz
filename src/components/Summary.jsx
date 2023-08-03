// eslint-disable-next-line no-unused-vars
import React from "react";
import succesImage from "../assets/images/success.png";
import UseFech from "../hooks/useFaching";
import classes from "./styles/Summary.module.css";

// eslint-disable-next-line react/prop-types
export default function Summary({ score, noq }) {
  console.log("summery");
  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "exellent";
    }
  };
  const { loading, error, result } = UseFech(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      Authorization: import.meta.env.VITE_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : succesImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        progress bar will be placed here
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}
      {error && <div className={classes.badge}>An error occured!</div>}
      {!loading && !error && (
        <div>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
