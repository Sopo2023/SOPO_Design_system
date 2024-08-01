import type { Meta, StoryObj } from "@storybook/react";
import { SOPOLabel } from "./SOPOLabel";

const meta = {
  title: "Typograyphy/SOPOTypograyphy/SOPOLabel",
  component: SOPOLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelBold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const LabelMedium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const LabelRegular: Story = {
  args: {
    fontThickness: "Regular",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
