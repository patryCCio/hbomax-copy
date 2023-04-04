import { Link } from "react-router-dom";

const RegisterNow = () => {
  return (
    <section className="section register-now">
      <div className="register-box">
        <div className="text-center">
          <h2>Oglądaj bez ograniczeń, rezygnuj, kiedy chcesz.</h2>
          <h4>
            29,99 zł<small>/mies.</small>
          </h4>
          <a>Zarejestruj się teraz</a>
        </div>
      </div>
      <div className="register-box">
        <div className="text-center">
          <h2>Oszczędzasz 124,89 zł z roczną subskrypcją.*</h2>
          <h4>
            <s>359,88 zł</s>234,99 zł<small>/rok</small>
          </h4>
          <a>Skorzystaj ze zniżki</a>
          <p>
            *Oszczędność wyliczona na podstawie rocznej ceny 234,99 zł opłaconej
            z góry, w porównaniu do miesięcznej ceny 29,99 zł płaconej przez 12
            miesięcy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
