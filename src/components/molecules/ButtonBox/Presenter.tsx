/**
 * molecules/ButtonBox
 * PresentationalComponent
 * @package components
 */
import React from "react";
import classes from "./ButtonBox.module.scss";
/* components */
import { PrimaryButton } from "../../atoms/PrimaryButton";

type Props = {
  id: number;
  status: string;
  onClickChangeStatusTodo: (id: number, newStatus: string) => void;
  onClickDeleteTodo: (id: number) => void;
};

/**
 * Presenter
 * @param {Props} props
 * @returns
 */
export const Presenter: React.VFC<Props> = (props) => {
  switch (props.status) {
    case "notStarted":
      return (
        <div className={classes.buttonBox}>
          <div></div>
          <div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "inProgress")}>進行中</PrimaryButton>
            </div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "completed")}>完了</PrimaryButton>
            </div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickDeleteTodo(props.id)}>削除</PrimaryButton>
            </div>
          </div>
        </div>
      );
    case "inProgress":
      return (
        <div className={classes.buttonBox}>
          <div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "notStarted")}>着手前</PrimaryButton>
            </div>
          </div>
          <div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "completed")}>完了</PrimaryButton>
            </div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickDeleteTodo(props.id)}>削除</PrimaryButton>
            </div>
          </div>
        </div>
      );
    case "completed":
      return (
        <div className={classes.buttonBox}>
          <div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "notStarted")}>着手前</PrimaryButton>
            </div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickChangeStatusTodo(props.id, "inProgress")}>進行中</PrimaryButton>
            </div>
          </div>
          <div>
            <div className={classes.buttonWrapper}>
              <PrimaryButton onClickChangeTodoState={() => props.onClickDeleteTodo(props.id)}>削除</PrimaryButton>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
