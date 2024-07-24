import React from "react";
import type { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOCaption = ({
  text,
  fontThickness = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <CaptionText $fontThickness={fontThickness} $customStyle={customStyle!} {...props}>
      {text}
    </CaptionText>
  );
};

const CaptionText = styled.p<{ $fontThickness: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontThickness }) => SOPOTypography.Caption[$fontThickness]}
  ${({ $customStyle }) => $customStyle}
`;
