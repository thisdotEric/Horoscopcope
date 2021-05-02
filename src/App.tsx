import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ZodiacCard from "./components/ZodiacCard";
import HoroscopeCard from "./components/HoroscopeCard";
import DateToday from "./components/DateToday";
import {
  Horoscope,
  zodiacDailyHoroscope,
} from "../src/data/zodiacDailyHoroscope";
import Quote from "./components/Quote";
import Loading from "./components/Loading";

interface IQuote {
  quoteOfTheDay: string;
  author: string;
}

const App: React.FC = () => {
  // States
  const [dailyHoroscope, setdailyHoroscope] = useState<Horoscope[] | null>(
    null
  );
  const [quoteOfTheDay, setQuoteOfTheDay] = useState<IQuote>({
    quoteOfTheDay: "",
    author: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch quote of the day from external API
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

  const setZodiac = (zodiacName: string): void => {
    const getHoroscopeData = async () => {
      const todaysHoroscope: Horoscope[] = await zodiacDailyHoroscope(
        zodiacName
      );
      setdailyHoroscope(todaysHoroscope);
      setLoading(false);
    };

    getHoroscopeData();
    setLoading(true);
  };

  return (
    <div className="main">
      <Header />
      <Quote
        quoteOfTheDay={quoteOfTheDay.quoteOfTheDay}
        author={quoteOfTheDay.author}
      />

      <ZodiacCard setZodiac={setZodiac} />

      <div className="date-now">
        <DateToday dateToday={formattedDate} />
      </div>

      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default App;
