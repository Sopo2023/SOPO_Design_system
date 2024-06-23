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

export const BodyLarge: Story = {
  args: {
    fontScale: "Large",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const BodyMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const BodySmall: Story = {
    args: {
      fontScale: "Small",
      text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
    },
  };