import { useEffect, useState } from "react";
import * as Sentry from "@sentry/react";
import "./App.css";

function App() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + ".";
        } else {
          return ".";
        }
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        error
      </button>
      <p>sentry testing{dots}</p>
    </>
  );
}

export default App;
