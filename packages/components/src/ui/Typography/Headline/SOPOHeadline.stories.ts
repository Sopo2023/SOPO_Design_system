import type { Meta, StoryObj } from "@storybook/react";
import { SOPOHeadline } from "./SOPOHeadline";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOHeadline",
  component: SOPOHeadline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOHeadline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineLarge: Story = {
  args: {
    fontScale: "Large",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const HeadlineMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const HeadlineSmall: Story = {
  args: {
    fontScale: "Small",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
