import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ModalForm.module.css";
import { DATA } from "../../constants";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import ManageArticles from "./ManageArticles";

function ModalForm() {
  let { modalOption } = useContext(GlobalContext);

  const renderForm = () => {
    switch(modalOption.type) {
      case DATA.FORM_MODE.create:
        return <CreateForm />
      case DATA.FORM_MODE.update:
        return <UpdateForm />
      case DATA.FORM_MODE.manage:
        return <ManageArticles />
      default:
        return <div>Sorry! Something went wrong!</div>      
    }
  }

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.articleForm}>
        {renderForm()}
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
