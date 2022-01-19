/**
 * organisms/Footer
 * @package components
 */
import React from "react";
import classes from "./Footer.module.scss";
/* components */
import { Copyright } from "../../atoms/Copyright";

/**
 * Footer
 * @returns
 */
export const Footer: React.VFC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyrightWrapper}>
        <Copyright />
      </div>
    </footer>
  );
};
