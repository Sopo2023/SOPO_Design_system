import type { Meta, StoryObj } from "@storybook/react";
import { SOPOTitle1 } from "./SOPOTitle1";

const meta = {
  title: "ui/SOPOTypograyphy/SOPOTitle1",
  component: SOPOTitle1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SOPOTitle1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleBold: Story = {
  args: {
    fontThickness: "Bold",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const TitleMedium: Story = {
  args: {
    fontThickness: "Medium",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};

export const TitleRegular: Story = {
  args: {
    fontThickness: "Regular",
    text: "소포는 선배와 후배를 이어주는 플렛폼입니다",
  },
};
