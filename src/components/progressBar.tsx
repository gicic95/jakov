"use client";

import { AppProgressBar as NextNProgress } from "next-nprogress-bar";

export default function ProgressBar() {
  return (
    <NextNProgress
      height="5px"
      color="#000"
      options={{ showSpinner: false , minimum: 0.4, easing:'ease',speed: 500, }}
      shallowRouting
    />
  );
}
