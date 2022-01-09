/**
 * atoms/InputTodoAdd
 * ContainerComponent
 * @package components
 */
import { useState } from "react";
import { useRecoilState } from "recoil";
/* store */
import { todosState } from "../../../store/atoms/todosState";
/* constants */
import { INIT_UNIQUE_ID } from "../../../constants/data";
/* components */
import { Presenter } from "./Presenter";

/**
 * Container
 * @param {*} props
 * @returns
 */
export const InputTodoAdd = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };
  const onKeyDownInputEnter = (e) => {
    if (e.key === "Enter") {
      const newTodo = { id: uniqueId, title: e.target.value, status: "notStarted" };
      setUniqueId(uniqueId + 1);
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };
  return <Presenter placeholder={props.placeholder} onKeyDownInputEnter={onKeyDownInputEnter} onChangeInputText={onChangeInputText} inputText={inputText} />;
};
