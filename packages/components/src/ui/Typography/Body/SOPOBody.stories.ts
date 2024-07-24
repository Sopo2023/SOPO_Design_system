import type { Meta, StoryObj } from "@storybook/react";
import { SOPOBody } from "./SOPOBody";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOBody",
  component: SOPOBody,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BodyBold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const BodyMedium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const BodyRegular: Story = {
    args: {
      fontThickness: "Regular",
      text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
    },
  };