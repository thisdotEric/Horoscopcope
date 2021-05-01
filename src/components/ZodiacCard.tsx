import React, { useState } from "react";
import "./ZodiacCard.css";

interface ZodiacCardProps {
  zodiacName: string;
  startDate: string;
  endDate: string;
  setZodiac: (zodiac: string) => void;
}

// Renders zodiac cards
const ZodiacCard: React.FC<ZodiacCardProps> = ({
  zodiacName,
  startDate,
  endDate,
  setZodiac,
}) => {
  const [addSlideEffect, setaddSlideEffect] = useState<string>("");
  const [highlight, sethighlight] = useState<string>("card");
  const [hideDate, sethideDate] = useState<string>("date");
  return (
    <div
      className={"zodiac " + (addSlideEffect ? "slide" : "")}
      onClick={() => {
        setaddSlideEffect("slide");
        sethighlight("highlight");
        sethideDate("hide");
        setZodiac(zodiacName);
      }}
    >
      <div className={highlight}>
        <img
          src={require(`../assets/zodiacSvgs/${zodiacName}.svg`).default}
          className="zodiacLogo"
          alt="svg"
        />
        <p className="zodiacName">{zodiacName}</p>
      </div>
      <div className={hideDate}>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
    </div>
  );
};

export default ZodiacCard;
