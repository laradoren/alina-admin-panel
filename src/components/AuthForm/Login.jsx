import { DATA } from "../../constants";
import css from "./AuthForm.module.css";
import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function Login({ onChangeForm }) {
  const { loginUser } = useContext(GlobalContext);
  const onSubmitForm = (values) => {
    if (values.login && values.password) {
      loginUser(values);
    } else {
      alert("Fill all fields!");
    }
  };
  return (
    <div className={css.content}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={onSubmitForm}
      >
        <Form className={css.form}>
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
            onClick={() => onChangeForm(DATA.FORM_TYPE.register)}
          >
            Create new acount
          </label>
          <button className={css.button}>Log In</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
