import type { Meta, StoryObj } from "@storybook/react";
import { SOPOTitle2 } from "./SOPOTitle2";

const meta = {
  title: "Typograyphy/SOPOTypograyphy/SOPOTitle2",
  component: SOPOTitle2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOTitle2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title2Bold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const Title2Medium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const Title2Regular: Story = {
  args: {
    fontThickness: "Regular",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
