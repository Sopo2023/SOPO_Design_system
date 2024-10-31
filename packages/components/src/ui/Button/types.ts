import React, { HTMLAttributes, ReactNode } from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import {
    ShapeSizeType,
  } from "@sopo-web/styles";

export interface SOPODisbledButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  type:RuleSet;
  children: ReactNode;
  buttonSize: ButtonSize;
  typography?: TypographyType;
  radius?: ShapeSizeType;
  customStyle?: RuleSet;
  disabled: boolean;
  onclick: () => void;
}
export interface TogleBuutonProps{
  disabled:boolean;
  customStyle?: CSSProperties;
  onclick: () => void;
}

export type TypographyType = [
  "Title1" | "Title2" | "Headline1" | "Headline2" | "Body" | "Label",
  "Bold" | "Medium" | "Regular",
];
export type ButtonSize = "default" | "large" | "medium" | "small";
