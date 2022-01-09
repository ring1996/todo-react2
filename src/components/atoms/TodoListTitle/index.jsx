/**
 * atoms/TodoListTitle
 * @package components
 */
import classes from "./TodoListTitle.module.scss";

/**
 * TodoListTitle
 * @param {*} props
 * @returns
 */
export const TodoListTitle = (props) => {
  return <p className={classes.title}>{props.children}</p>;
};
