import React from "react";
import "./HoroscopeCard.css";
import calendar from "../assets/calendar.png";
import medkit from "../assets/medkit.png";
import heart from "../assets/heart.png";
import wired from "../assets/wired.png";

interface HoroscopeCardProps {
  name: string;
  content: string;
  imageName: string;
}

interface IObjectKeys {
  [key: string]: string;
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({
  name,
  content,
  imageName,
}) => {
  const icons: IObjectKeys = {
    calendar: calendar,
    career: wired,
    love: heart,
    health: medkit,
  };

  return (
    <div className="horoscopeCard">
      <div className="card-header">
        <img src={icons[imageName]} alt="" />
        <p>{name}</p>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HoroscopeCard;
