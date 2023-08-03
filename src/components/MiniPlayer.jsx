// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "./styles/Miniplayer.module.css";

// eslint-disable-next-line react/prop-types
export default function MiniPlayer({ id, title }) {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = ` nicher url ta ekhane hbe ${id}`;
  // https://www.youtube.com/watch?v=
  function toogleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toogleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toogleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        width="300px"
        height="168px"
        url={videoUrl}
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
