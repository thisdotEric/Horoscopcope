import './App.css';
import Header from './components/Header';
import ZodiacCard from './components/ZodiacCard';
import HoroscopeCard from './components/HoroscopeCard';

const App: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <span>Hello JOHN ERIC!</span>
      <div className="cards">
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
        <ZodiacCard zodiacName="Aries" startDate="Mar 21" endDate="Apr 20" />
      </div>

      <HoroscopeCard name="Today" />
    </div>
  );
};

export default App;
