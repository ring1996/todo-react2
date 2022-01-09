/**
 * organisms/TodoLists
 * ContainerComponent
 * @package components
 */
import { useRecoilValue } from "recoil";
/* store */
import { todosState } from "./../../../store/atoms/todosState";
/* components */
import { Presenter } from "./Presenter";

/**
 * Container
 * @returns
 */
export const TodoLists = () => {
  const todos = useRecoilValue(todosState);
  const notStartedTodos = todos.filter((todo) => todo.status === "notStarted");
  const inProgressTodos = todos.filter((todo) => todo.status === "inProgress");
  const completedTodos = todos.filter((todo) => todo.status === "completed");

  return <Presenter notStartedTodos={notStartedTodos} inProgressTodos={inProgressTodos} completedTodos={completedTodos} />;
};
