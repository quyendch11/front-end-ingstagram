import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <h1>404 Error Page</h1>
      <p class="zoom-area">
        <b>THERE IS NOTHING TO SEE HERE</b>{" "}
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
    </>
  );
};

export default NotFound;
