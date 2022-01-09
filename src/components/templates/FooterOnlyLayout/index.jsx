/**
 * templates/FooterOnlyLayout
 * @package components
 */
import classes from "./FooterOnlyLayout.module.scss";
import { Footer } from "./../../organisms/Footer";

/**
 * FooterOnlyLayout
 * @param {*} props
 * @returns
 */
export const FooterOnlyLayout = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </div>
  );
};
