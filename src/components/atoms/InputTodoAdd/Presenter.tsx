/**
 * atoms/InputTodoAdd
 * PresentationalComponent
 * @package components
 */
import React from "react";
import classes from "./InputWithIcon.module.scss";

type Props = {
  placeholder: string;
  inputText: string;
  onKeyDownInputEnter: (e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent) => void;
  onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Presenter
 * @param {Props} props
 * @returns
 */
export const Presenter: React.VFC<Props> = (props) => {
  return (
    <div className={classes.inputWrapper}>
      <input className={classes.input} type="text" placeholder={props.placeholder} onChange={props.onChangeInputText} onKeyDown={props.onKeyDownInputEnter} value={props.inputText} />
    </div>
  );
};
