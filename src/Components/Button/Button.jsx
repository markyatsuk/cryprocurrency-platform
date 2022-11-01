import s from "./Button.module.css";

const Button = ({ children, type }) => (
  <button type={type} className={s.btn}>
    {children}
  </button>
);

export default Button;
