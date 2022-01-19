/**
 * organisms/TodoLists
 * ContainerComponent
 * @package components
 */
import { TodoType } from "../../../types/Todo";
import React from "react";
import { useRecoilValue } from "recoil";
/* store */
import { todosState } from "../../../store/atoms/todosState";
/* components */
import { Presenter } from "./Presenter";

/**
 * Container
 * @returns
 */
export const TodoLists: React.VFC = () => {
  const todos: TodoType[] = useRecoilValue(todosState);
  const notStartedTodos = todos.filter((todo) => todo.status === "notStarted");
  const inProgressTodos = todos.filter((todo) => todo.status === "inProgress");
  const completedTodos = todos.filter((todo) => todo.status === "completed");

  return <Presenter notStartedTodos={notStartedTodos} inProgressTodos={inProgressTodos} completedTodos={completedTodos} />;
};
