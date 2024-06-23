import type { Meta, StoryObj } from "@storybook/react";
import { SOPOTitle } from "./SOPOTitle";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOTitle",
  component: SOPOTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    fontScale: "Large",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const TitleMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const TitleSmall: Story = {
  args: {
    fontScale: "Small",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
