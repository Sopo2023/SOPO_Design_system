import React from "react";
import type { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOHeadline1 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <HeadlineText $fontScale={fontScale} $customStyle={customStyle!} {...props}>
      {text}
    </HeadlineText>
  );
};

const HeadlineText = styled.p<{ $fontScale: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => SOPOTypography.Headline1[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
