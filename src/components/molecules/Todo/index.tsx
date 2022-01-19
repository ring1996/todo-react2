/**
 * molecules/Todo
 * @package components
 */
import React from "react";
import classes from "./Todo.module.scss";
import { TodoTitle } from "../../atoms/TodoTitle";
import { ButtonBox } from "../ButtonBox";
import { TodoType } from "../../../types/Todo";

type TodoProps = TodoType;

/**
 * Todo
 * @param {*} props
 * @returns
 */
export const Todo: React.VFC<TodoProps> = (props) => {
  return (
    <div className={classes.todo}>
      <TodoTitle>{props.title}</TodoTitle>
      <ButtonBox id={props.id} status={props.status} />
    </div>
  );
};
