/**
 * organisms/TodoList
 * @package components
 */
import React from "react";
import classes from "./TodoList.module.scss";
import { TodoType } from "../../../types/Todo";
/* components */
import { TodoListTitle } from "../../atoms/TodoListTitle";
import { Todo } from "../../molecules/Todo";

type TodoListProps = {
  title: string;
  todos: TodoType[];
};

/**
 * TodoList
 * @param {TodoListProps} props
 * @returns
 */
export const TodoList: React.VFC<TodoListProps> = (props) => {
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
