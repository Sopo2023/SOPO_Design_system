import type { Meta, StoryObj } from "@storybook/react";
import { SOPOCaption } from "./SOPOCaption";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOCaption",
  component: SOPOCaption,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOCaption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CaptionBold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const CaptionMedium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const CaptionRegularl: Story = {
  args: {
    fontThickness: "Regular",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
