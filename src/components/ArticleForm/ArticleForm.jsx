import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ArticleForm.module.css";
import { DATA } from "../../constants";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";

function ArticleForm() {
  let { formMode } = useContext(GlobalContext);

  return (
    <div className={css.articleForm}>
      {formMode === DATA.FORM_MODE.create ? <CreateForm /> : <UpdateForm />}
    </div>
  );
}

export default ArticleForm;
