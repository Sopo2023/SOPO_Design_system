import React, { useState } from "react";
import styled from "styled-components";
import { TogleBuutonProps } from "../types";
import {
  SOPOShape,
  ShapeSizeType,
  SOPOTypography,
  SOPOLightTheme,
  ButtonSizeStyle,
} from "@sopo-web/styles";
import { SOPOColor } from "@sopo-web/foundations";

export const ToggleButton = ({ disabled, customStyle }: TogleBuutonProps) => {
  const [enable, setEnable] = useState(false);
  const handleAble = () => {
    setEnable((prev) => !prev);
  };
  return (
    <ToggleButtonWrap
      style={customStyle}
      disabled={!enable || disabled}
      onClick={handleAble}
      role="button"
    >
      <span></span>
    </ToggleButtonWrap>
  );
};

// const ToggleButtonWrap = styled.div<{disabled:boolean}>`
// width: 100px;
// height: 30px;
// `
const ToggleButtonWrap = styled.div<{ disabled: boolean }>`
  width: 50px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  /* background-color: aqua; */
  display: flex;
  /* justify-content: ${({ disabled }) =>
    !disabled ? "flex-end" : "flex-start"}; */
  align-items: center;
  padding-left: 1.5px;
  padding-right: 1.5px;
  background-color: ${({ disabled }) =>
    !disabled ? SOPOColor.Green60 : SOPOColor.Neutral95};

  cursor: pointer;

  span {
    position: absolute;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 50%;
    background-color: ${SOPOLightTheme.white};

    transition: left 0.3s ease-out;
    left: ${({ disabled }) => (disabled ? "3%" : "45%")};
  }
`;
