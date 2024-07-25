import React, { HTMLAttributes, ReactNode } from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import { SOPOShape, ShapeSizeType, SOPOTypography } from "@sopo-web/styles";
import { FlexLayout } from "../../../layout";

type TypographyType = [
  "Title1" | "Title2" | "Headline1" | "Headline2" | "Body" | "Label",
  "Bold" | "Medium" | "Regular"
];

type ColorsType = {
  textColor?: string;
  backgroundColor?: CSSProperties["backgroundColor"];
};

export interface SOPODisbledButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  typography?: TypographyType;
  colors?: ColorsType;
  radius?: ShapeSizeType;
  customStyle?: RuleSet<object>[];
}


export const SOPODisbledButton = ({
  children,
  typography = ["Body", "Bold"],
  colors,
  radius = "Medium",
  customStyle,
  ...props
}: SOPODisbledButtonProps) => {
  return (
    <StyledDisbledButton
      typography={typography}
      colors={colors}
      radius={radius}
      customStyle={customStyle}
      {...props}
    >
      {children}
    </StyledDisbledButton>
  );
};



const StyledDisbledButton = styled.button<{
  typography: TypographyType;
  colors: ColorsType;
  radius: ShapeSizeType;
  customStyle: RuleSet<object>[];
}>`
  min-width: 40px;
  min-height: 40px;

  outline: none;
  border: none;
  cursor: pointer;

  ${({ colors, theme }) => css`
    color: ${colors?.textColor || theme.onSurface};
    background-color: ${colors?.backgroundColor || "transparent"};
  `}

  ${FlexLayout({ alignItems: "center", justifyContent: "center" })};
  ${({ radius }) => SOPOShape[radius]};
  ${({ typography }) => SOPOTypography[typography[0]][typography[1]]}

  ${({ customStyle }) => customStyle}
`;
