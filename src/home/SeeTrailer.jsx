import { Link } from "react-router-dom";

const SeeTrailer = () => {
  return (
    <section className="section trailer">
      <div className="all-trailer">
        <div className="img">
          <img
            src="https://hbomax-images.warnermediacdn.com/2022-08/TT_PL.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=480"
            alt="rodsmoka"
          />
        </div>
        <div className="text-center">
          <h4>Dostępne już teraz wyłącznie w ramach subskrypcji HBO MAX.</h4>
        </div>
        <a>Zobacz zwiastun</a>
      </div>
    </section>
  );
};

export default SeeTrailer;
