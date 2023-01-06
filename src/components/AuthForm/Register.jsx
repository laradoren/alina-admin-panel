import { DATA } from "../../constants";
import css from "./AuthForm.module.css";
import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function Register({ onChangeForm }) {
  const { registerUser } = useContext(GlobalContext);

  const onSubmitForm = (values) => {
    registerUser(values);
  };

  return (
    <div className={css.content}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={onSubmitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>Email</label>
          <Field name="email" id="email" className={css.input} type="email" />
          <label className={css.label}>Login</label>
          <Field name="login" id="login" className={css.input} type="text" />
          <label className={css.label}>Password</label>
          <Field
            name="password"
            id="password"
            className={css.input}
            type="password"
          />
          <label
            className={css.label}
            onClick={() => onChangeForm(DATA.FORM_TYPE.login)}
          >
            Already have account?
          </label>
          <button className={css.button}>Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
