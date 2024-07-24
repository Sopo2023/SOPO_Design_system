import React from "react";
import type { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOBody = ({
  text,
  fontThickness = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <BodyText $fontThickness={fontThickness} $customStyle={customStyle!} {...props}>
      {text}
    </BodyText>
  );
};

const BodyText = styled.p<{ $fontThickness: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontThickness }) => SOPOTypography.Body[$fontThickness]}
  ${({ $customStyle }) => $customStyle}
`;
