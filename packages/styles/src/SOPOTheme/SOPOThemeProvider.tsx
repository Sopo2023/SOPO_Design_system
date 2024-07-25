import React, { ReactNode } from "react";
import { SOPOTheme, ThemeProvider } from "styled-components";

export interface SOPOThemeProviderProps {
  children: ReactNode;
  theme: SOPOTheme;
}

export const SOPOThemeProvider = ({
  children,
  theme,
}: SOPOThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};