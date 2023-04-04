import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="section header">
      <div className="img">
        <img
          src="https://hbomax-images.warnermediacdn.com/2023-03/Succession_PL_HBOORIG_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=480"
          alt="Sukcesja"
        />
      </div>

      <div className="text-center">
        <h1>
          HBO Max to dom dla kultowych, wielokrotnie nagradzanych seriali,
          filmów i nie tylko
        </h1>
      </div>

      <div className="header-flexbox-wrapper">
        <div className="header-flexbox">
          <div className="text-center">
            <h2>
              <strong>29,99 zł</strong>
              <small>/mies.</small>
            </h2>
            <h3>Rezygnuj, kiedy chcesz</h3>
          </div>

          <a>Zarejestruj się</a>
        </div>
        <div className="header-flexbox">
          <div className="text-center">
            <h2 className="margin-smaller">
              <small>
                <s>359,88 zł</s>
              </small>
              <strong>234,99 zł</strong>
              <small>/rok.</small>
            </h2>
            <h3>Oszczędzasz 34% z roczną subskrypcją.*</h3>
          </div>

          <a className="margin-button-smaller">Skorzystaj ze zniżki</a>
        </div>
      </div>

      <div className="text-center">
        <p>
          *Oszczędność wyliczona na podstawie rocznej ceny 234,99 zł opłaconej z
          góry, w porównaniu do miesięcznej ceny 29,99 zł płaconej przez 12
          miesięcy.
        </p>
      </div>
    </section>
  );
};

export default Header;
