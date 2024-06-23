import type { Meta, StoryObj } from "@storybook/react";
import { SOPOLabel } from "./SOPOLabel";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOLabel",
  component: SOPOLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SOPOLabelLarge: Story = {
  args: {
    fontScale: "Large",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const SOPOLabelMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const SOPOLabelSmall: Story = {
  args: {
    fontScale: "Small",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
