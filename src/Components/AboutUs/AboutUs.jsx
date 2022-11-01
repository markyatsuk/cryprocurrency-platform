import Container from "../Container/Container";
import s from "./AboutUs.module.css";
import Button from "../Button/Button";
import { BarIcon, TriangleIcon } from "../Icons/Icons";
export default function AboutUs() {
  return (
    <section className={s.aboutUs}>
      <Container>
        <div className={s.heroContainer}>
          <p className={s.pretitle}>About us</p>
          <h2 className={s.title}>Global technologies</h2>
          {/* <p className={s.afterTitle}>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
          <Button type={"button"}>Start Now</Button> */}
          <BarIcon />
          <p className={s.level}>Level 1</p>
          <ul className={s.list}>
            <li className={s.item}>
              Deploy a multi-legged futures strategy by simultaneously placing
              orders to buy and sell from the same order ticket.
            </li>
            <li className={s.item}>
              Place and manage orders based on the Level 2 order book, which
              provides a live display of all bids and offers waiting to be
              executed.
            </li>
          </ul>
          <Button>Start Now</Button>
          <h2 className={s.future}>
            The future Cryptocurrency trading{" "}
            <span className={s.futureSpan}>platform</span>
          </h2>
          <p className={s.futurePar}>
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <a className={s.readMore}>Learn more</a>
          <div className={s.formContainer}>
            <div className={s.firstBlock + " " + s.block}>P2P Networks</div>
            <div className={s.block + " " + s.secondBlock}>
              Artificial Intelligence
            </div>
            <div className={s.block}>Storage Networks</div>
          </div>
          <div className={s.formSecondContainer}>
            <div className={s.block}>Public Data</div>
            <div className={s.block}>Encrypted Private Data *</div>
          </div>
          <div className={s.formContainerBottom}>
            <div className={s.formContainerBottomDiv}>
              <div className={s.block}>Indexing</div>
              <div className={s.block}>API</div>
            </div>
            <TriangleIcon />
            <p className={s.formContainerBottomPar}>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
          </div>
          <p className={s.consumer}>Consumers</p>
        </div>
      </Container>
    </section>
  );
}
