import React, { useState } from "react";

import style from "./Dob.module.css";

const Years = [
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
  1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005,
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export function Month({ handleOnchange }) {
  const [selectedMonth, setSelectedMonth] = useState("");

  function forMonth(e) {
    setSelectedMonth(e.target.value);
    handleOnchange(e.target.value);
  }
  return (
    <div>
      <select className={style.month} value={selectedMonth} onChange={forMonth}>
        <option value="" disabled>
          {" "}
          month
        </option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}{" "}
          </option>
        ))}
      </select>
      {/* {selectedMonth && <p>Selected month: {selectedMonth}</p>} */}
    </div>
  );
}

export function Date({ handleOnchange }) {
  const [selectedDay, setSelectedDay] = useState(null);
  function forDay(e) {
    setSelectedDay(e.target.value);
    handleOnchange(e.target.value);
  }

  return (
    <>
      <select className={style.day} value={selectedDay} onChange={forDay}>
        <option value="">Day</option>
        {Day.map((Day) => (
          <option key={Day} value={Day}>
            {Day}
          </option>
        ))}
      </select>
      {/* {selectedDay && <p>Selected Day: {selectedDay}</p>} */}
    </>
  );
}

export function Dayy({ handleOnchange }) {
  const [selectedYear, setSelectedYear] = useState(null);

  function forYear(e) {
    setSelectedYear(e.target.value);
    handleOnchange(e.target.value);
  }

  return (
    <>
      <select className={style.year} value={selectedYear} onChange={forYear}>
        <option value="">Year</option>
        {Years.map((Year) => (
          <option key={Year} value={Year}>
            {Year}
          </option>
        ))}
      </select>
      {/* {selectedYear && <p>Selected Year: {selectedYear}</p>} */}
    </>
  );
}

//export default Dob;
