/**
 * atoms/InputTodoAdd
 * ContainerComponent
 * @package components
 */
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
/* store */
import { todosState } from "../../../store/atoms/todosState";
/* constants */
import { INIT_UNIQUE_ID } from "../../../constants/data";
/* components */
import { Presenter } from "./Presenter";

type InputTodoAddProps = {
  placeholder: string;
};

/**
 * Container
 * @param {InputTodoAddProps} props
 * @returns
 */
export const InputTodoAdd: React.VFC<InputTodoAddProps> = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const onKeyDownInputEnter = (e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newTodo = { id: uniqueId, title: e.target.value, status: "notStarted" };
      setUniqueId(uniqueId + 1);
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };
  return <Presenter placeholder={props.placeholder} inputText={inputText} onKeyDownInputEnter={onKeyDownInputEnter} onChangeInputText={onChangeInputText} />;
};
