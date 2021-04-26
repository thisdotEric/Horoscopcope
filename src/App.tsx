import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ZodiacCard from "./components/ZodiacCard";
import HoroscopeCard from "./components/HoroscopeCard";
import DateToday from "./components/DateToday";

import { zodiacSigns } from "../src/data/zodiacDates";
import {
  Horoscope,
  zodiacDailyHoroscope,
} from "../src/data/zodiacDailyHoroscope";

const App: React.FC = () => {
  const [userZodiac, setUserZodiac] = useState<string>("");
  const [dailyHoroscope, setdailyHoroscope] = useState<Horoscope[] | null>(
    null
  );

  const setZodiac = async (zodiacName: string) => {
    setUserZodiac(zodiacName);

    const todaysHoroscope: Horoscope[] = await zodiacDailyHoroscope(zodiacName);
    setdailyHoroscope(todaysHoroscope);
  };

  return (
    <div className="main">
      <Header />
      <div className="reader">
        <p>Hello &nbsp;</p>
      </div>
      <div className="cards">
        {
          // Render every zodiac sign
          zodiacSigns.map(zodiac => (
            <ZodiacCard
              zodiacName={zodiac.name}
              startDate={zodiac.dateStart}
              endDate={zodiac.dateEnd}
              setZodiac={setZodiac}
            />
          ))
        }
      </div>

      <div className="date-now">
        <DateToday dateToday="April 20, 2021" />
      </div>

      <div className="horoscope-cards">
        {dailyHoroscope?.map(zodiacTrait => (
          <HoroscopeCard
            name={zodiacTrait.name}
            content={zodiacTrait.content}
            imageName="health"
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default App;
