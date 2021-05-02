import React, { useRef } from "react";
import "./ZodiacCard.css";
import { zodiacSigns } from "../data/zodiacDates";

interface ZodiacCardProps {
  setZodiac: (zodiac: string) => void;
}

// Renders zodiac cards
const ZodiacCard: React.FC<ZodiacCardProps> = ({ setZodiac }) => {
  const zodiacRef = useRef<HTMLDivElement[]>([]);
  zodiacRef.current = [];

  const addDivElement = (divElement: HTMLDivElement) => {
    if (divElement && !zodiacRef.current.includes(divElement)) {
      zodiacRef.current.push(divElement);
    }
  };

  const zodiacClick = (zodiacName: string, zodiacNode: HTMLDivElement) => {
    // Set choosen zodiac
    setZodiac(zodiacName);

    // Add a slide down effect
    zodiacNode.classList.add("slide");
    // Add highlight effect
    zodiacNode.querySelector("#img")?.classList.remove("card");
    zodiacNode.querySelector("#img")?.classList.add("highlight");
    // Remove bottom date
    zodiacNode.querySelector("#date")?.classList.remove("date");
    zodiacNode.querySelector("#date")?.classList.add("hide");
  };

  const animateUp = (zodiacNode: HTMLDivElement) => {
    zodiacNode.classList.remove("slide");

    zodiacNode.classList.add("slide-up");

    // Remove highlight effect
    zodiacNode.querySelector("#img")?.classList.remove("highlight");
    zodiacNode.querySelector("#img")?.classList.add("card");

    // Show bottom date
    zodiacNode.querySelector("#date")?.classList.add("date");
    zodiacNode.querySelector("#date")?.classList.remove("hide");

    // Remove unnecessary slide-up effect class
    zodiacNode.classList.remove("slide-up");
  };

  return (
    <div className="cards">
      {zodiacSigns.map(zodiac => (
        <div
          ref={addDivElement}
          key={zodiac.name}
          className={`zodiac`}
          onClick={() => {
            zodiacRef.current.forEach(zodiacDiv => {
              if (zodiacDiv.classList.contains("slide")) animateUp(zodiacDiv);

              if (
                zodiacDiv.querySelector(".card p")?.innerHTML === zodiac.name
              ) {
                zodiacClick(zodiac.name, zodiacDiv);
                return;
              }
            });
          }}
        >
          <div className="card" id="img">
            <img
              src={require(`../assets/zodiacSvgs/${zodiac.name}.png`).default}
              className="zodiacLogo"
              alt="svg"
            />
            <p className="zodiacName">{zodiac.name}</p>
          </div>
          <div className="date" id="date">
            <p>{zodiac.dateStart}</p>
            <p>{zodiac.dateEnd}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZodiacCard;
