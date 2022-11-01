import Container from "../Container/Container";
import s from "./Hero.module.css";
import Button from "../Button/Button";
import { ArrowIcon } from "../Icons/Icons";
export default function Hero() {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.heroContainer}>
          <p className={s.pretitle}>CRYPTO TRADING</p>
          <h1 className={s.title}>
            Engineers Meet <span className={s.titleSpan}>Traders_</span>
          </h1>
          <p className={s.afterTitle}>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
          <Button type={"button"}>
            Learn More{" "}
            <span className={s.span}>
              <ArrowIcon />
            </span>{" "}
          </Button>
        </div>
      </Container>
    </section>
  );
}
