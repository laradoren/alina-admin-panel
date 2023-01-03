import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ModalForm.module.css";
import { Formik, Field, Form } from "formik";

function UpdateForm() {
  let { activeArticle, updateArticle, closeModalWindow } = useContext(GlobalContext);

  const onSubmitForm = (values, { resetForm }) => {
    if (values.title && values.image && values.tag && values.author) {
      updateArticle(values);
      resetForm();
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <Formik
      initialValues={activeArticle}
      onSubmit={onSubmitForm}
      onReset={closeModalWindow}
    >
      <Form className={css.form}>
        <label className={css.title}>Update article</label>
        <label>Title</label>
        <Field name="title" id="title" />
        <label>Image</label>
        <Field name="image" id="image" />
        <label>Tag</label>
        <Field name="tag" id="tag" />
        <label>Author</label>
        <Field name="author" id="author" />
        <div className={css.actions}>
          <button type="submit" className={css.button}>
            Update
          </button>
          <button type="reset" className={css.button}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default UpdateForm;
