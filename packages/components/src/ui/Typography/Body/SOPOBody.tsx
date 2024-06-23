import React from "react";
import type { FontScale, TypographyProps } from "../../types";
import { SOPOTypography } from "@sopo-web/styles";
import styled, { type RuleSet } from "styled-components";

export const SOPOBody = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <BodyText $fontScale={fontScale} $customStyle={customStyle!} {...props}>
      {text}
    </BodyText>
  );
};

const BodyText = styled.p<{ $fontScale: FontScale; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => SOPOTypography.Body[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
