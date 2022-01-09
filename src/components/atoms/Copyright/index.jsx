/**
 * atoms/Copyright
 * @package components
 */
import classes from "./Copyright.module.scss";

/**
 * Copyright
 * @returns
 */
export const Copyright = () => {
  return (
    <p className={classes.copyright}>
      <small>&copy; 2021 Riku Kamimura</small>
    </p>
  );
};
