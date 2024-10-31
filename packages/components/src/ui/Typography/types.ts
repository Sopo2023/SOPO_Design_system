import type { HTMLAttributes } from "react";
import type { RuleSet } from "styled-components";

export type FontThickness = "Bold" | "Medium" | "Regular";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  fontScale?: FontThickness;
  customStyle?: RuleSet;
}

