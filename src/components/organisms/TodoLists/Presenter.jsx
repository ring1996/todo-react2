/**
 * organisms/TodoLists
 * PresentationalComponent
 * @package components
 */
import classes from "./TodoLists.module.scss";
/* components */
import { TodoList } from "../TodoList";

/**
 * Presenter
 * @param {*} props
 * @returns
 */
export const Presenter = (props) => {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <TodoList title="着手前" todos={props.notStartedTodos} />
      </li>
      <li className={classes.item}>
        <TodoList title="進行中" todos={props.inProgressTodos} />
      </li>
      <li className={classes.item}>
        <TodoList title="完了" todos={props.completedTodos} />
      </li>
    </ul>
  );
};
