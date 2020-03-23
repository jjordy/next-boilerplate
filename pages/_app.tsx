import React from "react";
import * as Sentry from "@sentry/node";
import "css/tailwind.css";
import "css/styles.css";

Sentry.init({
  // Replace with your project's Sentry DSN
  dsn: process.env.SENTRY_DSN,
});

export default function App({ Component, pageProps, err }) {
  return <Component {...pageProps} err={err} />;
}
