import React from "react";
import { FontThickness, TypographyProps } from "../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOTitle1 = ({
  text,
  fontThickness = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <TitleText $fontThickness={fontThickness} $customStyle={customStyle!} {...props}>
      {text}
    </TitleText>
  );
};

const TitleText = styled.p<{ $fontThickness: FontThickness; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontThickness }) => SOPOTypography.Title1[$fontThickness]}
  ${({ $customStyle }) => $customStyle}
`;
