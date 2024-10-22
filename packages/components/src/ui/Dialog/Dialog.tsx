import { SOPOShape, ShapeSizeType } from "@sopo-web/styles";
import React from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import { Column, FlexLayout, Row } from "../../layout";
import { DodamBody, DodamTitle } from "../Typography";
import {  SOPODisbledButton } from "../Button/DisabledButton";

type DialogHandlerType = {
  content: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: RuleSet;
};

type DialogType =
  | {
      dialog: "ALERT";
      close: DialogHandlerType;
    }
  | {
      dialog: "CONFIRM";
      confirm: DialogHandlerType;
      dismiss: DialogHandlerType;
    };

export interface DodamDialogProps {
  title: string;
  text: string;
  type: DialogType;
  color?: {
    dialogBackgroundColor?: CSSProperties["backgroundColor"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
  };
  radius?: ShapeSizeType;
}

export const DodamDialog = ({
  title,
  text,
  type,
  color,
  radius = "ExtraLarge",
}: DodamDialogProps) => {
  return (
    <StyledDialog
      dialogType={type.dialog}
      radius={radius}
      backgroundColor={color?.dialogBackgroundColor}
    >
      <Column rowGap={12} padding={type.dialog === "CONFIRM" ? "6px" : "12px"}>
        <DodamTitle
          fontScale="Large"
          text={title}
          customStyle={StyledTitle(color?.titleColor)}
        />
        <DodamBody text={text} customStyle={StyledText(color?.textColor)} />
      </Column>

      {type.dialog === "CONFIRM" ? (
        <Row columnGap={8}>
          <SOPODisbledButton
            customStyle={type.dismiss.style}
            onClick={type.dismiss.onClick}
            radius="Medium"
          >
            {type.dismiss.content}
          </SOPODisbledButton>
          <SOPODisbledButton
            customStyle={type.confirm.style}
            onClick={type.confirm.onClick}
            radius="Medium"
          >
            {type.confirm.content}
          </SOPODisbledButton>
        </Row>
      ) : (
        <Row justifyContent="flex-end">
          <DodamBody
            fontScale="Large"
            text={type.close.content}
            onClick={type.close.onClick}
            customStyle={type.close.style}
          />
        </Row>
      )}
    </StyledDialog>
  );
};

const StyledDialog = styled.div<{
  radius: ShapeSizeType;
  dialogType: "ALERT" | "CONFIRM";
  backgroundColor: CSSProperties["backgroundColor"];
}>`
  min-width: 280px;
  max-width: 560px;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.surfaceContainerHigh};
  padding: ${({ dialogType }) => (dialogType === "ALERT" ? "12px" : "18px")};

  ${({ radius }) => SOPOShape[radius]}
  ${({ dialogType }) =>
    FlexLayout({
      flexDirection: "column",
      rowGap: dialogType === "CONFIRM" ? "18px" : "24px",
    })}
`;

const StyledTitle = (titleColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => titleColor || theme.onSurface};
`;

const StyledText = (textColor: CSSProperties["color"]) => css`
  color: ${({ theme }) => textColor || theme.tertiary};
`;
