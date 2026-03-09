import{ useState, useEffect } from "react";

const DateNow = () => {
  const [currentDate, setCurrentDate] = useState("");

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const getYesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1); // subtract 1 day
    return formatDate(date);
  };

  useEffect(() => {
    // set yesterday’s date immediately
    setCurrentDate(getYesterday());

    // update every day (optional)
    const interval = setInterval(() => {
      setCurrentDate(getYesterday());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{currentDate}</span>;
};

export default DateNow;

