import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ModalForm.module.css";
import { Formik, Field, Form } from "formik";

function CreateForm() {
  let { createArticle, closeModalWindow } = useContext(GlobalContext);

  const onSubmitForm = (values, { resetForm }) => {
    if (values.title && values.image && values.tag && values.author) {
      createArticle(values);
      resetForm();
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        tag: "",
        author: "",
      }}
      onSubmit={onSubmitForm}
      onReset={closeModalWindow}
    >
      <Form className={css.form}>
        <label className={css.title}>Create article</label>
        <label className={css.label}>Title</label>
        <Field name="title" id="title" className={css.input} />
        <label className={css.label}>Image</label>
        <Field name="image" id="image" className={css.input} />
        <label className={css.label}>Tag</label>
        <Field name="tag" id="tag" className={css.input} />
        <label className={css.label}>Author</label>
        <Field name="author" id="author" className={css.input} />
        <div className={css.actions}>
          <button type="submit" className={css.button}>
            Create
          </button>
          <button type="reset" className={css.button}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateForm;
