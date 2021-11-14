import './AuthForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({
  onSubmit,
  title,
  errorMessage,
  buttonClasses,
  buttonText,
  questionText,
  linkText,
  linkPath,
  children,
}) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <Link to="/"><img className="auth-form__logo" src={logo} alt="Логотип"></img></Link>
      <h1 className="auth-form__title">{title}</h1>
      {children}
      <span className="auth-form__error-message">{errorMessage}</span>
      <button className={buttonClasses}>{buttonText}</button>
      <p className="auth-form__text">{questionText} <span><Link className="auth-form__link" to={linkPath}>{linkText}</Link></span></p>
    </form>
  );
};

export default AuthForm;