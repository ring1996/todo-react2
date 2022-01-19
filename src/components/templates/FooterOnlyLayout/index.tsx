/**
 * templates/FooterOnlyLayout
 * @package components
 */
import React from "react";
import classes from "./FooterOnlyLayout.module.scss";
import { Footer } from "../../organisms/Footer";

type FooterOnlyLayoutProps = {
  children: React.ReactNode;
};

/**
 * FooterOnlyLayout
 * @param {FooterOnlyLayoutProps} props
 * @returns
 */
export const FooterOnlyLayout: React.VFC<FooterOnlyLayoutProps> = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </div>
  );
};
