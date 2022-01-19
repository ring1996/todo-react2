/**
 * organisms/TodoLists
 * PresentationalComponent
 * @package components
 */
import React from "react";
import classes from "./TodoLists.module.scss";
import { TodoType } from "../../../types/Todo";
/* components */
import { TodoList } from "../TodoList";

type Props = {
  notStartedTodos: TodoType[];
  inProgressTodos: TodoType[];
  completedTodos: TodoType[];
};

/**
 * Presenter
 * @param {Props} props
 * @returns
 */
export const Presenter: React.VFC<Props> = (props) => {
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
