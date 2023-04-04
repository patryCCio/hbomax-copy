import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <section className="section subscription">
      <div className="glass">
        <div className="text-center">
          <h2>Zaoszczędź 124,89 zł</h2>
          <h3>Z roczną subskrypcją</h3>
          <h4>
            <s>359,88 zł</s>
            234,99 zł
            <small>/rok*</small>
          </h4>
          <h5>Oglądaj swoje ulubione tytuły i więcej</h5>

          <ul>
            <li>12 miesięcy nieprzerwanej rozrywki</li>
            <li>Zaoszczędź imponujące 124,89 zł rocznie</li>
            <li>Jedna wygodna płatność na rok</li>
          </ul>

          <a>ZAREJESTRUJ SIĘ</a>

          <p>
            *Zapłać 234,99 zł za cały rok z góry w ramach naszej rocznej
            subskrypcji, co stanowi równowartość tylko 19,60 zł miesięcznie
            przez rok. Obecna cena regularna miesięcznej subskrypcji to 29,99
            zł/mies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
