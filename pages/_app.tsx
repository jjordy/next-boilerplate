import React from "react";
import { init } from "utils/sentry";
import "css/tailwind.css";
import "css/styles.css";
import { RecoilRoot } from "recoil";

init();

export default function App({ Component, pageProps, err }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} err={err} />
    </RecoilRoot>
  );
}
