import React, { useState } from "react";
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
  const [dailyHoroscope, setdailyHoroscope] = useState<Horoscope[] | null>(
    null
  );

  // Get the current date
  const currentDate = new Date();
  const formattedDate: string = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const setZodiac = async (zodiacName: string) => {
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
        <DateToday dateToday={formattedDate} />
      </div>

      <div className="horoscope-cards">
        {
          // Renders horoscope for the day
          dailyHoroscope?.map(zodiacTrait => (
            <HoroscopeCard
              name={zodiacTrait.name}
              content={zodiacTrait.content}
              imageName={zodiacTrait.imageName}
            />
          ))
        }
      </div>
    </div>
  );
};

export default App;
