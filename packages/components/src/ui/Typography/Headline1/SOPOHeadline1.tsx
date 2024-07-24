import React from "react";
import type { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOHeadline1 = ({
  text,
  fontThickness = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <HeadlineText $fontThickness={fontThickness} $customStyle={customStyle!} {...props}>
      {text}
    </HeadlineText>
  );
};

const HeadlineText = styled.p<{ $fontThickness: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontThickness }) => SOPOTypography.Headline1[$fontThickness]}
  ${({ $customStyle }) => $customStyle}
`;
