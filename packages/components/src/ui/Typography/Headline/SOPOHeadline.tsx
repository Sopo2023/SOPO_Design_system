import React from "react";
import type { FontScale, TypographyProps } from "../../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOHeadline = ({
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

const HeadlineText = styled.p<{ $fontScale: FontScale; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => SOPOTypography.Headline[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
