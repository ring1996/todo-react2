/**
 * molecules/ButtonBox
 * ContainerComponent
 * @package components
 */
import React from "react";
import { useRecoilState } from "recoil";
/* store */
import { todosState } from "../../../store/atoms/todosState";
/* components */
import { Presenter } from "./Presenter";

type ButtonBoxProps = {
  id: number;
  status: string;
};

/**
 * Container
 * @param {ButtonBoxProps} props
 * @returns
 */
export const ButtonBox: React.VFC<ButtonBoxProps> = (props) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const onClickDeleteTodo = (id: number) => {
    const targetTodo = todos.filter((todo) => todo.id === id)[0];
    if (window.confirm(`「${targetTodo.title}」を削除してよろしいですか？`)) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    }
  };
  const onClickChangeStatusTodo = (id: number, newStatus: string) => {
    const targetTodo = todos.filter((todo) => todo.id === id)[0];
    const notTargetTodos = todos.filter((todo) => todo.id !== id);
    const newTodos = [
      ...notTargetTodos,
      {
        id: targetTodo.id,
        title: targetTodo.title,
        status: newStatus,
      },
    ];
    setTodos(newTodos);
  };
  return <Presenter id={props.id} status={props.status} onClickChangeStatusTodo={onClickChangeStatusTodo} onClickDeleteTodo={onClickDeleteTodo} />;
};
