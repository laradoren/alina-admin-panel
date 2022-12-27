import { DATA } from "../../constants";
import css from "./AuthForm.module.css";

function Login({onChangeForm}) {
  return (
    <div className={css.content}>
      <h1>Login</h1>
      <form className={css.form}>
        <label className={css.label}>Login</label>
        <input className={css.input} type="text" />
        <label className={css.label}>Password</label>
        <input className={css.input} type="password" />
        <label className={css.label} onClick={() => onChangeForm(DATA.FORM_TYPE.register)}>Create new acoount</label>
        <button className={css.button}>Log In</button>
      </form>
    </div>
  );
}

export default Login;
