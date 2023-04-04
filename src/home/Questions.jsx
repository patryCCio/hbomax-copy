import { useEffect, useRef } from "react";

const Questions = () => {
  const questionRef = useRef([]);
  const answerRef = useRef([]);

  const array = [
    {
      question: "Czym jest HBO Max?",
      answer:
        "HBO Max to nowa platforma streamingowa. Znajdziesz tu najwspanialsze historie od Warner Bros., HBO, DC, Cartoon Network i wielu innych po raz pierwszy w jednym miejscu.",
    },
    {
      question: "Jak mogę uzyskać pomoc w razie problemów?",
      answer: `W razie jakichkolwiek problemów z zarejestrowaniem się lub uzyskaniem dostępu do platformy HBO Max, zajrzyj do zakładki Pomoc. Rozpoczniesz seans, zanim popcorn będzie gotowy!`,
    },
    {
      question: "Czy mogę korzystać z HBO Max, jeśli subskrybuję już HBO GO?",
      answer:
        "Jeśli masz subskrypcję HBO GO, możesz teraz oglądać HBO Max! Wystarczy, że zalogujesz się podając dane swojego konta HBO GO. Jeśli chcesz oglądać na innych urządzeniach, pobierz aplikację HBO Max ze sklepu App Store lub Google Play.",
    },
    {
      question: "Ile kosztuje HBO Max?",
      answer:
        "Dostęp do HBO Max kosztuje tylko 29,99 zł miesięcznie. A jeśli zdecydujesz się zapłacić 234,99 zł za rok z góry, możesz oszczędzić 34%. To tak, jakby cztery z 12 miesięcy były za darmo!",
    },
    {
      question: "Czy mogę zmienić subskrypcję lub z niej zrezygnować?",
      answer:
        "Tak! Możnesz wybierać między subskrypcjami miesięcznymi i rocznymi. Możesz też w dowolnej chwili zrezygnować z subskrypcji.",
    },
    {
      question: "Na jakich urządzeniach mogę oglądać HBO Max?",
      answer:
        "Możesz oglądać HBO Max na urządzeniach iPhone i iPad, telefonach i tabletach z systemem Android, telewizorach Apple TV, Android TV, Chromecast, Samsung TV, LG, przeglądarkach Chrome OS, MacOS, Windows PC, konsolach PS5, PS4, Xbox Series X|S i Xbox One. W przyszłości pojawi się więcej urządzeń. Dowiedz się więcej ",
    },
  ];

  const handleClick = (index) => {
    questionRef.current.forEach((el, indexInner) => {
      if (indexInner === index) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          answerRef.current[indexInner].style.maxHeight = "0px";
          answerRef.current[indexInner].style.padding = "0rem 2.5rem";
          answerRef.current[indexInner].style.margin = "0rem 0rem 0rem 0rem";
        } else {
          el.classList.add("active");
          answerRef.current[indexInner].style.maxHeight = "1000px";
          answerRef.current[indexInner].style.padding = "0rem 2.5rem";
          answerRef.current[indexInner].style.margin = "0rem 0rem 2.5rem 0rem";
          answerRef.current[indexInner].classList.add("active");
        }
      } else {
        el.classList.remove("active");
        answerRef.current[indexInner].style.maxHeight = "0px";
        answerRef.current[indexInner].style.padding = "0rem 2.5rem";
        answerRef.current[indexInner].style.margin = "0rem 0rem 0rem 0rem";
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <section className="section questions">
      <div className="question-wrapper">
        <div className="text-center">
          <h2>Częste pytania o HBO Max</h2>
        </div>
        <div className="question-box">
          {array.map((el, index) => {
            return (
              <>
                <div
                  className="single-question"
                  key={index}
                  onClick={() => handleClick(index)}
                  ref={(el2) => (questionRef.current[index] = el2)}
                >
                  <div className="text">{el.question}</div>
                  <div className="add">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <hr className="blue" />
                <div
                  className="single-answer"
                  key={index}
                  ref={(el2) => (answerRef.current[index] = el2)}
                >
                  {el.answer}
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="question-wrapper second">
        <div className="text-center">
          <h2>HBO Max Hubs</h2>
        </div>
        <div className="question-img">
          <div className="img">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-01/_max_hub_logo_hbo.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=160"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-01/_max_hub_logo_max-originals.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=160"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-01/_max_hub_logo_wb.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=160"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-01/_max_hub_logo_dc.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=160"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-01/_max_hub_logo_cn-collection.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=160"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
