/**
 * organisms/TodoList
 * @package components
 */
import classes from "./TodoList.module.scss";
/* components */
import { TodoListTitle } from "../../atoms/TodoListTitle";
import { Todo } from "../../molecules/Todo";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <TodoListTitle>{props.title}</TodoListTitle>
      </div>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <li key={todo.id} className={classes.item}>
            <Todo id={todo.id} title={todo.title} status={todo.status} />
          </li>
        ))}
      </ul>
    </div>
  );
};
