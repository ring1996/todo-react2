/**
 * atoms/PrimaryButton
 * @package components
 */
import classes from "./PrimaryButton.module.scss";

/**
 * PrimaryButton
 * @param {*} props
 * @returns
 */
export const PrimaryButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickChangeTodoState}>
      {props.children}
    </button>
  );
};
