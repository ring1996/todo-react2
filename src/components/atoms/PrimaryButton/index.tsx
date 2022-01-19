/**
 * atoms/PrimaryButton
 * @package components
 */
import React from "react";
import classes from "./PrimaryButton.module.scss";

type PrimaryButtonProps = {
  onClickChangeTodoState: () => void;
  children: React.ReactNode;
};

/**
 * PrimaryButton
 * @param {PrimaryButtonProps} props
 * @returns
 */
export const PrimaryButton: React.VFC<PrimaryButtonProps> = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickChangeTodoState}>
      {props.children}
    </button>
  );
};
