import React, { useState } from "react";
import "./ZodiacCard.css";

interface ZodiacCardProps {
  zodiacName: string;
  startDate: string;
  endDate: string;
  setZodiac: (zodiac: string) => void;
  effects?: IClickedZodiacEffects;
  setRef: (el: HTMLDivElement) => void;
}

export interface IClickedZodiacEffects {
  direction: string;
  isHighlight: boolean;
  isHiddenDate: boolean;
}

// Renders zodiac cards
const ZodiacCard: React.FC<ZodiacCardProps> = ({
  zodiacName,
  startDate,
  endDate,
  setZodiac,
  effects,
  setRef,
}) => {
  const [addSlideEffect, setaddSlideEffect] = useState<string>("");
  const [highlight, sethighlight] = useState<string>("card");
  const [hideDate, sethideDate] = useState<string>("date");

  return (
    <div
      ref={setRef}
      className={`zodiac ${addSlideEffect ? "slide" : ""}`}
      onClick={() => {
        if (effects !== null) {
          setaddSlideEffect(effects!.direction);
          sethighlight(effects!.isHighlight ? "highlight" : "");
          sethideDate(effects!.isHiddenDate ? "hide" : "");
          setZodiac(zodiacName);
        }
      }}
    >
      <div className={highlight}>
        <img
          src={require(`../assets/zodiacSvgs/${zodiacName}.png`).default}
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
