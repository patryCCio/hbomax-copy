import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import "./home.css";
import Pictures from "./Pictures";
import SeeTrailer from "./SeeTrailer";
import { useEffect } from "react";
import Info from "./Info";
import Subscription from "./Subscription";
import Devices from "./Devices";
import RegisterNow from "./RegisterNow";
import Questions from "./Questions";
import Footer from "./Footer";

const Home = () => {
  const [actualNumber, setActualNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(6);

  const maxNumberOfPicture = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1336) {
      setMaxNumber(9);
    } else if (window.innerWidth >= 1336) {
      setMaxNumber(10);
    } else if (window.innerWidth < 768) {
      setMaxNumber(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", maxNumberOfPicture);
    maxNumberOfPicture();
  }, []);

  return (
    <>
      <Header />
      <Movies actualNumber={actualNumber} setActualNumber={setActualNumber} />
      <Pictures
        actualNumber={actualNumber}
        setActualNumber={setActualNumber}
        maxNumber={maxNumber}
      />
      <SeeTrailer />
      <Info />
      <Subscription />
      <Devices />
      <RegisterNow />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
