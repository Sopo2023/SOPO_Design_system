import type { Meta, StoryObj } from "@storybook/react";
import { SOPOHeadline1 } from "./SOPOHeadline1";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOHeadline1",
  component: SOPOHeadline1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOHeadline1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineBold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const HeadlineMedium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const HeadlineRegularl: Story = {
  args: {
    fontThickness: "Regular",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
