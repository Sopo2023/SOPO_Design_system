import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const Delete = ({ size = 20, color="#000", customStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      customStyle={customStyle!}
    >
      
      <StyledPath
        d="M19 1L1 19"
        color={color!}
        stroke={color} 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <StyledPath
        d="M1 1L19 19"
        color={color!}
        stroke={color} 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
    </StyledSvg>
  );
};