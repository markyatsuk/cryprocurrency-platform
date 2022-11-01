import Container from "../Container/Container";
import s from "./Header.module.css";
import { MenuIcon } from "../Icons/Icons";
export default function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <p className={s.logo}>C</p>
          <MenuIcon />
        </div>
      </Container>
    </header>
  );
}
