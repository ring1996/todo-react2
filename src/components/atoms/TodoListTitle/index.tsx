/**
 * atoms/TodoListTitle
 * @package components
 */
import React from "react";
import classes from "./TodoListTitle.module.scss";

type TodoListTitleProps = {
  children: React.ReactNode;
};

/**
 * TodoListTitle
 * @param {TodoListTitleProps} props
 * @returns
 */
export const TodoListTitle: React.VFC<TodoListTitleProps> = (props) => {
  return <p className={classes.title}>{props.children}</p>;
};
