import React from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App.jsx";

Sentry.init({
  dsn: "https://759f5e5952521fd5055422c37be9eab2@o4510067874398208.ingest.de.sentry.io/4510070944956496",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
