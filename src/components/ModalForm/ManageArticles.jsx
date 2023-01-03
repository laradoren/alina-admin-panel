import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ModalForm.module.css";

function ManageArticles() {
  let { loadArticles, setModalOption } = useContext(GlobalContext);

  const onResetForm = () => {
    setModalOption((prev) => {
      return { ...prev, isOpen: false };
    });
  };

  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <Formik onReset={onResetForm} onSubmit={onSubmitForm} initialValues={{}}>
      <Form className={css.form}>
        <label className={css.title}>Filter articles</label>

        <label>Sort by</label>
        <div>
          <Field as="select" name="sorter">
            <option value="tag">Tag</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </Field>

          <Field as="select" name="order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Field>
        </div>

        <label>Search in title or author name</label>
        <Field type="text" name="search" id="search" />

        <label>Filter by tag</label>
        <Field type="text" name="tagd" id="tagd" />

        <div className={css.actions}>
          <button type="submit" className={css.button}>
            Filter
          </button>
          <button type="reset" className={css.button}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ManageArticles;
