export interface Horoscope {
  name: string;
  content: string;
}

export const zodiacDailyHoroscope = async (
  zodiacName: string
): Promise<Horoscope[]> => {
  const data = await fetch(
    `https://devbrewer-horoscope.p.rapidapi.com/today/long/${zodiacName}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5472e62316mshfb841093fd5b443p14b9e6jsnfe1968922723",
        "x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com",
        useQueryString: "true",
      },
    }
  );

  // Get the JSON data from the Response object
  const horoscopeData = await data.json();

  return [
    {
      name: "Today",
      content: horoscopeData[zodiacName].Daily,
    },
    {
      name: "Career",
      content: horoscopeData[zodiacName].Career,
    },
    {
      name: "Health",
      content: horoscopeData[zodiacName].Health,
    },
    {
      name: "Love",
      content: horoscopeData[zodiacName].Love,
    },
  ];
  // today: horoscopeData[zodiacName].Daily,
  // zodiacName: zodiacName,
  // career: horoscopeData[zodiacName].Career,
  // health: horoscopeData[zodiacName].Health,
  // love: horoscopeData[zodiacName].Love,
};
