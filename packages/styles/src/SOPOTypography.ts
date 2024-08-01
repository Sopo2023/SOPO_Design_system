import { css, type RuleSet } from "styled-components";


export type TextSize = {
  Bold: RuleSet;
  Medium: RuleSet;
  Regular: RuleSet;
};

export type TypographyStyles = {
  Title1: TextSize;
  Title2: TextSize;
  Headline1: TextSize;
  Headline2: TextSize;
  Body: TextSize;
  Label: TextSize;
  Caption: TextSize;
};

export const SOPOTypography: TypographyStyles = Object.freeze({
  Title1: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 32px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 32px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 32px;
      line-height: 130%;
    `,
  },
  Title2: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 28px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 28px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 28px;
      line-height: 130%;
    `,
  },
  Headline1: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 24px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 24px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 24px;
      line-height: 130%;
    `,
  },
  Headline2: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 20px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 20px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 20px;
      line-height: 130%;
    `,
  },
  Body: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 16px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 16px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 16px;
      line-height: 130%;
    `,
  },
  Label: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 14px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 14px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 14px;
      line-height: 130%;
    `,
  },
  Caption: {
    Bold: css`
      font-family: "pretendard-Bold" !important;
      font-size: 12px;
      line-height: 130%;
    `,
    Medium: css`
      font-family: "pretendard-Medium" !important;
      font-size: 12px;
      line-height: 130%;
    `,
    Regular: css`
      font-family: "pretendard-regular" !important;
      font-size: 12px;
      line-height: 130%;
    `,
  },
});
