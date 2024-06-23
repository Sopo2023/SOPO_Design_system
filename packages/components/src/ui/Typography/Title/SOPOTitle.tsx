import React from "react";
import { FontScale, TypographyProps } from "../../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOTitle = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <TitleText $fontScale={fontScale} $customStyle={customStyle!} {...props}>
      {text}
    </TitleText>
  );
};

const TitleText = styled.p<{ $fontScale: FontScale; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => SOPOTypography.Title[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
