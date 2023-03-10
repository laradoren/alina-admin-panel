import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import css from "./ModalForm.module.css";

function ManageArticles() {
  let { loadArticles, closeModalWindow, currentFilters } = useContext(GlobalContext);

  const onSubmitForm = (values) => {
    loadArticles(values, "0");
    closeModalWindow()
  };

  return (
    <Formik onReset={closeModalWindow} onSubmit={onSubmitForm} initialValues={currentFilters}>
      <Form className={css.form}>
        <label className={css.title}>Filter articles</label>

        <label className={css.label}>Sort by</label>
        <div>
          <Field as="select" name="sortBy" className={css.input} >
            <option value="tag">Tag</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </Field>

          <Field as="select" name="sortOrder" className={css.input} >
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </Field>
        </div>

        <label className={css.label}>Search in title or author name</label>
        <Field type="text" name="search" id="search" className={css.input} />

        <label className={css.label}>Filter by tag</label>
        <Field type="text" name="filter" id="filter" className={css.input} />

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
