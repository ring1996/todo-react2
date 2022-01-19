/**
 * atoms/TodoTitle
 * @package components
 */
import React from "react";
import classes from "./TodoTitle.module.scss";

type TodoTitleProps = {
  children: React.ReactNode;
};

/**
 * TodoTitle
 * @param {TodoTitleProps} props
 * @returns
 */
export const TodoTitle: React.VFC<TodoTitleProps> = (props) => {
  return <p className={classes.title}>{props.children}</p>;
};
