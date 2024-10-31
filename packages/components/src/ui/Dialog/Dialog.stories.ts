import type { Meta, StoryObj } from "@storybook/react";
import {SOPODialog}from "./Dialog";
import { css } from "styled-components";
import {SOPOLightTheme} from "@sopo-web/styles"
const meta = {
  title: "ui/SOPODialog",
  component: SOPODialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPODialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const AlertText = css`
  cursor: pointer;
  padding: 8px 12px;
  color: ${({ theme }) => theme.primaryLight};
`;

export const AlertDialog: Story = {
  args: {
    title: "제목을 입력해주세요",
    text: "본문을 입력해주세요",

    type: {
      dialog: "ALERT",
      close: {
        content: "닫기",
        onClick: () => window.alert("닫기"),
        style: AlertText,
      },
    },
  },
};

const StyledButton = css`
  width: 50%;
  height: 50px;
  min-height: 50px;
  color: ${SOPOLightTheme.white};
  background-color: ${ SOPOLightTheme.primaryLight};

`;

const DismissButton = css`
  color: ${SOPOLightTheme.Black};
  background-color: ${ SOPOLightTheme.dialogButton};
  width: 50%;
  height: 50px;
  min-height: 50px;
`;

export const ConfirmDialog: Story = {
  args: {
    title: "제목을 입력해주세요.",
    text: "본문을 입력해주세요",

    type: {
      dialog: "CONFIRM",
      confirm: {
        content: "확인",
        onClick: () => window.alert("확인"),
        style: StyledButton,
      },
      dismiss: {
        content: "취소",
        onClick: () => window.alert("취소"),
        style: DismissButton,
      },
    },
  },
};
