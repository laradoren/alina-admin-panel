import { DATA } from '../../constants';
import css from './AuthForm.module.css';

function Register({onChangeForm}) {
  return (
    <div className={css.content}>
      <h1>Register</h1>
      <form className={css.form}>
        <label className={css.label}>Email</label>
        <input className={css.input} type="email" />
        <label className={css.label}>Login</label>
        <input className={css.input} type="text" />
        <label className={css.label}>Password</label>
        <input className={css.input} type="password" />
        <label className={css.label} onClick={() => onChangeForm(DATA.FORM_TYPE.login)}>Already have account?</label>
        <button className={css.button}>Register</button>
      </form>
    </div>
  );
}

export default Register;
