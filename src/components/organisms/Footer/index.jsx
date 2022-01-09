/**
 * organisms/Footer
 * @package components
 */
import classes from "./Footer.module.scss";
/* components */
import { Copyright } from "../../atoms/Copyright";

/**
 * Footer
 * @returns
 */
export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyrightWrapper}>
        <Copyright />
      </div>
    </footer>
  );
};
