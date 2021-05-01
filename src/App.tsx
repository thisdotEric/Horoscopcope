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
import Quote from "./components/Quote";

const App: React.FC = () => {
  // States
  const [dailyHoroscope, setdailyHoroscope] = useState<Horoscope[] | null>(
    null
  );
  const [quoteOfTheDay, setQuoteOfTheDay] = useState<{
    quoteOfTheDay: string;
    author: string;
  }>({
    quoteOfTheDay: "",
    author: "",
  });

  useEffect(() => {
    fetch(`https://quotes.rest/qod?language=en`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(quotes => {
        setQuoteOfTheDay({
          quoteOfTheDay: quotes.contents.quotes[0].quote,
          author: quotes.contents.quotes[0].author,
        });
      })
      .catch(e => console.log(e));
  }, []);

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
      <Quote
        quoteOfTheDay={quoteOfTheDay.quoteOfTheDay}
        author={quoteOfTheDay.author}
      />
      <div className="cards">
        {
          // Render every zodiac sign
          zodiacSigns.map(zodiac => (
            <ZodiacCard
              key={zodiac.name}
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
              key={zodiacTrait.name}
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
