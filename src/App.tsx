import React, { useEffect, useRef, useState } from "react";
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
import Loading from "./components/Loading";

interface IQuote {
  quoteOfTheDay: string;
  author: string;
}

interface ActiveZodiac {
  zodiacName: string;
  isActive: boolean;
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
  const [activeZodiacs, setActiveZodiac] = useState<ActiveZodiac[]>([
    {
      zodiacName: "Aries",
      isActive: false,
    },
    {
      zodiacName: "Aquarius",
      isActive: false,
    },
    {
      zodiacName: "Cancer",
      isActive: false,
    },
    {
      zodiacName: "Capricorn",
      isActive: false,
    },
    {
      zodiacName: "Gemini",
      isActive: false,
    },
    {
      zodiacName: "Leo",
      isActive: false,
    },
    {
      zodiacName: "Libra",
      isActive: false,
    },
    {
      zodiacName: "Pisces",
      isActive: false,
    },
    {
      zodiacName: "Sagittarius",
      isActive: false,
    },
    {
      zodiacName: "Scorpio",
      isActive: false,
    },
    {
      zodiacName: "Taurus",
      isActive: false,
    },
    {
      zodiacName: "Virgo",
      isActive: false,
    },
  ]);

  const allZodiac = useRef([]);
  allZodiac.current = [];

  const add = (el: HTMLDivElement) => {
    console.log(el);
  };

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

  const setZodiac = async (zodiacName: string) => {
    const zodiacs = [...activeZodiacs];

    zodiacs.find(
      activeZodiac =>
        (activeZodiac.isActive =
          activeZodiac.zodiacName === zodiacName ? true : false)
    );

    setActiveZodiac(zodiacs);

    setLoading(true);
    const todaysHoroscope: Horoscope[] = await zodiacDailyHoroscope(zodiacName);
    setdailyHoroscope(todaysHoroscope);
    setLoading(false);
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
          zodiacSigns.map(zodiac => {
            return (
              <ZodiacCard
                key={zodiac.name}
                setRef={add}
                zodiacName={zodiac.name}
                startDate={zodiac.dateStart}
                endDate={zodiac.dateEnd}
                setZodiac={setZodiac}
                effects={{
                  direction: "slide",
                  isHiddenDate: true,
                  isHighlight: true,
                }}
              />
            );
          })
        }
      </div>

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
