/**
 * pages/TopPage
 * @package components
 */
import classes from "./TopPage.module.scss";
/* components */
import { FooterOnlyLayout } from "../../templates/FooterOnlyLayout";
import { InputTodoAdd } from "../../atoms/InputTodoAdd";
import { TodoLists } from "../../organisms/TodoLists";

/**
 * TopPage
 * @returns
 */
export const TopPage = () => {
  return (
    <FooterOnlyLayout>
      <div className={classes.todoInformationWrapper}>
        <InputTodoAdd placeholder="TODOを作成する" />
      </div>
      <div className={classes.todoListsWrapper}>
        <TodoLists />
      </div>
    </FooterOnlyLayout>
  );
};
