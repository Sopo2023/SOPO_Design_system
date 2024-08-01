import { ToggleButton } from "./ToggleButton";
import { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";

const meta = {
  title: "ui/SOPOButton/SOPOToggle",
  component: ToggleButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;

export const Toggle: StoryObj<typeof ToggleButton> = {
  args: {
    customStyle: {} as CSSProperties,
    onclick: () => {},
  },
};
