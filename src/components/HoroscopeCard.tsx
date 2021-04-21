import React from 'react';
import './HoroscopeCard.css';

interface HoroscopeCardProps {
  name: string;
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ name }) => {
  return (
    <div className="horoscopeCard">
      <div className="card-header">
        <p>{name}</p>
      </div>
      <div className="content">
        <p>
          You can easily pull up every thing together now and make your life
          larger. Maintain your focus and diverge all your energy onto it. Just
          do not say anything which can land you in an emotional mess. Those who
          are in business may be able to expand it or renovate the already
          established outlets.
        </p>
      </div>
    </div>
  );
};

export default HoroscopeCard;
