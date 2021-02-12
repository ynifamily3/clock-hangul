import React, { useEffect, useState } from "react";
import "normalize.css";
import ClockTable from "./components/template/ClockTable";
import { createGlobalStyle } from "styled-components";
import { dateToHangul } from "./util/clock";

const GlobalStyle = createGlobalStyle`
body {
  background-color: rgb(32,32,32);
}
`;
function App() {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <div>
        <ClockTable dateString={dateToHangul(date)} />
      </div>
    </>
  );
}

export default App;
