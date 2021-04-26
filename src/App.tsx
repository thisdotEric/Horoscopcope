import './App.css';
import Header from './components/Header';
import ZodiacCard from './components/ZodiacCard';
import HoroscopeCard from './components/HoroscopeCard';
import DateToday from './components/DateToday';

import {zodiacSigns} from '../src/data/zodiacDates'

const App: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <div className="reader">
        <p>Hello &nbsp;</p>
        {/* <input type="text" name="" id="" autoFocus /> */}
      </div>
      <div className="cards">
        {
          // Render every zodiac sign
          zodiacSigns.map(zodiac => 
            <ZodiacCard zodiacName={zodiac.name} startDate={zodiac.dateStart} endDate={zodiac.dateEnd} />
          )
        }
      </div>

      <div className="date-now">
        <DateToday dateToday="April 20, 2021" />
      </div>

      <div className="horoscope-cards">
        <HoroscopeCard
          name="Today"
          content=" You can easily pull up every thing together now and make your life
        larger. Maintain your focus and diverge all your energy onto it. Just
        do not say anything which can land you in an emotional mess. Those who
        are in business may be able to expand it or renovate the already
        established outlets."
          imageLocation="../assets/calendar.png"
        />
        <HoroscopeCard
          name="Today"
          content=" You can easily pull up every thing together now and make your life
      larger. Maintain your focus and diverge all your energy onto it. Just
      do not say anything which can land you in an emotional mess. Those who
      are in business may be able to expand it or renovate the already
      established outlets."
          imageLocation="../assets/calendar.png"
        />
        <HoroscopeCard
          name="Today"
          content=" You can easily pull up every thing together now and make your life
    larger. Maintain your focus and diverge all your energy onto it. Just
    do not say anything which can land you in an emotional mess. Those who
    are in business may be able to expand it or renovate the already
    established outlets."
          imageLocation="../assets/calendar.png"
        />
        <HoroscopeCard
          name="Today"
          content="You are passionate and romantic. You have been experiencing a very intense relationship with your partner. You both enjoy each otherﾒs company. Today is the day to honor each otherﾒs space. Every relation needs space for it to grow and flourish. If you donﾒt, it will decay within no time. Visit your friends and family. They also need you"
          imageLocation="../assets/calendar.png"
        />
      </div>
    </div>
  );
};

export default App;
