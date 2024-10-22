import React from "react";
import type { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOLabel = ({
  text,
  fontThickness = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <LabelText $fontThickness={fontThickness} $customStyle={customStyle!} {...props}>
      {text}
    </LabelText>
  );
};

const LabelText = styled.p<{ $fontThickness: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontThickness }) => SOPOTypography.Label[$fontThickness]}
  ${({ $customStyle }) => $customStyle}
`;
