"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default Providers;

