import React, { HTMLAttributes, ReactNode } from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import {
  SOPOShape,
  ShapeSizeType,
  SOPOTypography,
  SOPOLightTheme,
  ButtonSizeStyle,
} from "@sopo-web/styles";
import {FlexLayout} from "../../../layout/Flex/FlexLayout"
import {SOPODisbledButtonProps, TypographyType, ButtonSize} from "../types"
 


export const SOPODisbledButton = ({
  type,
  children,
  typography = ["Body", "Bold"],
  buttonSize,
  radius = "Medium",
  customStyle,
  disabled = false,
  onclick,
  ...props
}: SOPODisbledButtonProps) => {
  return (
    <StyledDisbledButton
      typography={typography}
      radius={radius}
      customStyle={customStyle!}
      buttonSize={buttonSize}
      disabled={disabled}
      onClick={onclick}
      {...props}
    >
      {children}
    </StyledDisbledButton>
  );
};

const StyledDisbledButton = styled.button<{
  typography: TypographyType;
  radius: ShapeSizeType;
  buttonSize: ButtonSize;
  customStyle: RuleSet;
}>`
  min-width: 40px;
  min-height: 40px;
  border-radius: 12px;
  background-color: ${({ disabled }) =>
    !disabled ? SOPOLightTheme.buttonColor : SOPOLightTheme.disable};
  outline: none;
  border: none;
  cursor: pointer;
  color: ${SOPOLightTheme.white};
  ${({ customStyle }) => customStyle};
  ${({ buttonSize }) => {
    return ButtonSizeStyle[buttonSize];
  }}
  ${FlexLayout({ alignItems: "center", justifyContent: "center" })};
  ${({ radius }) => SOPOShape[radius]};
  ${({ typography }) => SOPOTypography[typography[0]][typography[1]]}
`;
