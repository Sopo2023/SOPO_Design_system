import type { Meta, StoryObj } from "@storybook/react";
import { SOPODisbledButton } from "./SOPODisbledButton";
import { CSSProperties } from "react";

const meta = {
  title: "ui/SOPOButton/SOPODisbledButton",
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
    children: "넘어가요",
    typography: ["Body", "Bold"],
    disabled:false,
    buttonSize: "default", 
    customStyle: {} as CSSProperties, 
    onclick:()=>{},
  },
};
