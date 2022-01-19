/**
 * atoms/todosState
 * @package store
 */

import { atom, RecoilState } from "recoil";
import { INIT_TODO_LIST } from "../../constants/data";
import { TodoType } from "../../types/Todo";

/**
 * todosState
 * @returns
 */
export const todosState: RecoilState<TodoType[]> = atom({
  key: "todosState",
  default: INIT_TODO_LIST,
});
