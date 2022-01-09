/**
 * atoms/todosState
 * @package store
 */

import { atom } from "recoil";
import { INIT_TODO_LIST } from "./../../constants/data";

/**
 * todosState
 * @returns
 */
export const todosState = atom({
  key: "todosState",
  default: INIT_TODO_LIST,
});
