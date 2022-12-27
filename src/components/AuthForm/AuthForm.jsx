import { useState } from 'react';
import { DATA } from '../../constants';
import css from './AuthForm.module.css';
import Login from './Login';
import Register from './Register';

function AuthForm() {
  const [formType, setFormType] = useState(DATA.FORM_TYPE.login);

  const onChangeForm = (type) => {
    setFormType(type);
  }

  return (
    <div className={css.authForm}>
      {formType === DATA.FORM_TYPE.login && <Login onChangeForm={onChangeForm} />}
      {formType === DATA.FORM_TYPE.register && <Register onChangeForm={onChangeForm} />}
    </div>
  );
}

export default AuthForm;
