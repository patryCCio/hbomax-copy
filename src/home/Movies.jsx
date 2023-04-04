import { useEffect, useRef } from "react";

const Movies = ({ actualNumber, setActualNumber }) => {
  const buttonsRef = useRef([]);
  const buttons = [
    {
      id: 0,
      name: "Najpopularniejsze",
    },
    {
      id: 1,
      name: "Premiery w 2023",
    },
    {
      id: 2,
      name: "Akcja",
    },
    {
      id: 3,
      name: "Animacje",
    },
    {
      id: 4,
      name: "Komedie",
    },
    {
      id: 5,
      name: "Dramaty",
    },
    {
      id: 6,
      name: "Fantasy i SCI-FI",
    },
    {
      id: 7,
      name: "Horrory",
    },
    {
      id: 8,
      name: "Dokumenty",
    },
  ];

  const handleClick = () => {
    buttonsRef.current.forEach((el, index) => {
      if (index === actualNumber) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  };

  

  useEffect(() => {
    handleClick(0);
  }, [actualNumber]);

  return (
    <section className="section movies">
      <div className="img">
        <img
          src="https://hbomax-images.warnermediacdn.com/2023-03/tlou_filtermodulelead_leadimageasset_tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=480"
          alt="thelastofus"
        />
      </div>

      <div className="roll-wrapper">
        <div className="roll">
          {buttons.map((el, index) => {
            return (
              <button
                key={index}
                ref={(el2) => (buttonsRef.current[index] = el2)}
                onClick={() => setActualNumber(index)}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
