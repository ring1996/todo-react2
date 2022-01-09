/**
 * atoms/InputTodoAdd
 * PresentationalComponent
 * @package components
 */
import classes from "./InputWithIcon.module.scss";

/**
 * Presenter
 * @param {*} props
 * @returns
 */
export const Presenter = (props) => {
  return (
    <div className={classes.inputWrapper}>
      <input className={classes.input} type="text" placeholder={props.placeholder} onChange={props.onChangeInputText} onKeyDown={props.onKeyDownInputEnter} value={props.inputText} />
    </div>
  );
};
