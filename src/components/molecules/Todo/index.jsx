/**
 * molecules/Todo
 * @package components
 */
import classes from "./Todo.module.scss";
import { TodoTitle } from "../../atoms/TodoTitle";
import { ButtonBox } from "../ButtonBox";

/**
 * Todo
 * @param {*} props
 * @returns
 */
export const Todo = (props) => {
  return (
    <div className={classes.todo}>
      <TodoTitle>{props.title}</TodoTitle>
      <ButtonBox id={props.id} status={props.status} />
    </div>
  );
};
