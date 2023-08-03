[import React, { useEffect, useReducer } from "react";

const initialize = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was an error!",
      };
    default:
      return state;
  }
};

export default function Test() {
  const [state, dispatch] = useReducer(reducer, initialize);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          result: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error || null}
    </div>
  );
}
]