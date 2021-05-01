import React from "react";
import "./Quote.css";

interface QuoteProps {
  quoteOfTheDay: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ quoteOfTheDay, author }) => {
  return (
    <div className="quote">
      <p>
        {quoteOfTheDay} <span>&nbsp; {author}</span>
      </p>
    </div>
  );
};

export default Quote;
