/**
 * atoms/TodoTitle
 * @package components
 */
import classes from "./TodoTitle.module.scss";

/**
 * TodoTitle
 * @param {*} props
 * @returns
 */
export const TodoTitle = (props) => {
  return <p className={classes.title}>{props.children}</p>;
};
