import Container from "../Container/Container";
import s from "./Cards.module.css";
export default function Cards() {
  return (
    <section>
      <Container>
        <div className={s.card}>
          <p className={s.preTitle}>Spot & Margin</p>
          <h3 className={s.title}>Trade pairs with up to 10x leverage</h3>
          <p className={s.afterTitle}>Learn more</p>
        </div>
        <div className={s.card}>
          <p className={s.preTitle}>Derivatives</p>
          <h3 className={s.title}>40+ quarterly futures and contracts</h3>
          <p className={s.afterTitle}>Learn more</p>
        </div>
        <div className={s.card}>
          <p className={s.preTitle}>Trading Arena</p>
          <h3 className={s.title}>Prize pools worth up to USD 1,000,000</h3>
          <p className={s.afterTitle}>Learn more</p>
        </div>
        <div className={s.card}>
          <p className={s.preTitle}>mobile app</p>
          <h3 className={s.title}>Trade anytime, anywhere</h3>
          <p className={s.afterTitle}>Learn more</p>
        </div>
      </Container>
    </section>
  );
}
