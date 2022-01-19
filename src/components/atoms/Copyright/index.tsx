/**
 * atoms/Copyright
 * @package components
 */
import React from "react";
import classes from "./Copyright.module.scss";

/**
 * Copyright
 * @returns
 */
export const Copyright: React.VFC = () => {
  return (
    <p className={classes.copyright}>
      <small>&copy; 2021 Riku Kamimura</small>
    </p>
  );
};
