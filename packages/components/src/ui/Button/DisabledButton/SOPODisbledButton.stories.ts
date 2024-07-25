import type { Meta, StoryObj } from "@storybook/react";
import { SOPODisbledButton } from "./SOPODisbledButton";
import { css } from "styled-components";

const meta = {
  title: "ui/DodamButton/SOPODisbledButton",
  component: SOPODisbledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPODisbledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledContentButtonButton: Story = {
  args: {
    children: "svg 아이콘",
    typography: ["Body", "Medium"],
    customStyle: css``,
  },
};

