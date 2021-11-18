import './AuthForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({
  onSubmit,
  isValid,
  title,
  buttonClasses,
  buttonText,
  questionText,
  linkText,
  linkPath,
  children,
}) {
  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <Link to="/"><img className="auth-form__logo" src={logo} alt="Логотип"></img></Link>
      <h1 className="auth-form__title">{title}</h1>
      {children}
      <button className={buttonClasses} disabled={!isValid}>{buttonText}</button>
      <p className="auth-form__text">{questionText} <span><Link className="auth-form__link" to={linkPath}>{linkText}</Link></span></p>
    </form>
  );
};

export default AuthForm;