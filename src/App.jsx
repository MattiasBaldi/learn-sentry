import { useEffect, useState } from "react";
import * as Sentry from "@sentry/react";
import "./App.css";

// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error("This is your first error!");
      }}
    >
      Break the world
    </button>
  );
}

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
      <ErrorButton />
      <p>sentry testing{dots}</p>
    </>
  );
}

export default App;
